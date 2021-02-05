import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { YcloudTestModule } from '../../../test.module';
import { SchoolComponent } from 'app/entities/school/school.component';
import { SchoolService } from 'app/entities/school/school.service';
import { School } from 'app/shared/model/school.model';

describe('Component Tests', () => {
  describe('School Management Component', () => {
    let comp: SchoolComponent;
    let fixture: ComponentFixture<SchoolComponent>;
    let service: SchoolService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [YcloudTestModule],
        declarations: [SchoolComponent],
      })
        .overrideTemplate(SchoolComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(SchoolComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(SchoolService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new School(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.schools && comp.schools[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
