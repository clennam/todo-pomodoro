import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-options',
  templateUrl: './timer-options.component.html',
  styleUrls: ['./timer-options.component.scss']
})
export class TimerOptionsComponent implements OnInit {
  @Input() modalId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
