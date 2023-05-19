import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterJobListComponent } from './recruiter-job-list.component';

describe('RecruiterJobListComponent', () => {
  let component: RecruiterJobListComponent;
  let fixture: ComponentFixture<RecruiterJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterJobListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
