import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { YcloudTestModule } from '../../../test.module';
import { SchoolDetailComponent } from 'app/entities/school/school-detail.component';
import { School } from 'app/shared/model/school.model';

describe('Component Tests', () => {
  describe('School Management Detail Component', () => {
    let comp: SchoolDetailComponent;
    let fixture: ComponentFixture<SchoolDetailComponent>;
    const route = ({ data: of({ school: new School(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [YcloudTestModule],
        declarations: [SchoolDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(SchoolDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(SchoolDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load school on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.school).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
