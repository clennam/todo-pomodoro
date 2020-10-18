import { Component, OnInit } from '@angular/core';
import { TimerConfig } from '../functionals/models';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timerConfig: TimerConfig = new TimerConfig();

  constructor() { }

  ngOnInit() {
  }

}
