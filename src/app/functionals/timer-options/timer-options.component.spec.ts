import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerOptionsComponent } from './timer-options.component';

describe('TimerOptionsComponent', () => {
  let component: TimerOptionsComponent;
  let fixture: ComponentFixture<TimerOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
