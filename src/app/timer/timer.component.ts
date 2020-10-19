import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { TimerConfig } from '../functionals/models';
import { TimerWidgetComponent } from '../functionals/timer-widget/timer-widget.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timerConfig: TimerConfig = new TimerConfig();
  @ViewChildren(TimerWidgetComponent) timerWidgetList: QueryList<TimerWidgetComponent>;

  constructor() { }

  ngOnInit() {
  }

  tabSwitch() {
    this.timerWidgetList.forEach(timerWidget => timerWidget.stop());    
  }

}
