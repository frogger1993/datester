import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaDefaultComponent } from './da-default.component';

describe('DaDefaultComponent', () => {
  let component: DaDefaultComponent;
  let fixture: ComponentFixture<DaDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
