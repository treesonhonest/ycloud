import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ISchool } from 'app/shared/model/school.model';
import { SchoolService } from './school.service';
import { SchoolDeleteDialogComponent } from './school-delete-dialog.component';

@Component({
  selector: 'jhi-school',
  templateUrl: './school.component.html',
})
export class SchoolComponent implements OnInit, OnDestroy {
  schools?: ISchool[];
  eventSubscriber?: Subscription;

  constructor(protected schoolService: SchoolService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.schoolService.query().subscribe((res: HttpResponse<ISchool[]>) => (this.schools = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInSchools();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: ISchool): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInSchools(): void {
    this.eventSubscriber = this.eventManager.subscribe('schoolListModification', () => this.loadAll());
  }

  delete(school: ISchool): void {
    const modalRef = this.modalService.open(SchoolDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.school = school;
  }
}
