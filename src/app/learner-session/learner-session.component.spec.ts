import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerSessionComponent } from './learner-session.component';

describe('LearnerSessionComponent', () => {
  let component: LearnerSessionComponent;
  let fixture: ComponentFixture<LearnerSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
