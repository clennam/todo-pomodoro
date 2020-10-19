import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer-widget',
  templateUrl: './timer-widget.component.html',
  styleUrls: ['./timer-widget.component.scss']
})
export class TimerWidgetComponent implements OnInit {
  @Input() duration: number;
  countdown: Observable<number>;
  remaining: number;

  constructor() { }

  ngOnInit() {
    this.startCountdown(this.duration);
  }

  private startCountdown(duration: number) {
    // declare countdown observable
    this.countdown = new Observable<number>(subscriber => {
      subscriber.next(duration);
      let timer = setInterval(() => {
        subscriber.next(--duration);
        if (duration <= 0) {
          clearInterval(timer);
          subscriber.complete();
        }
      }, 1000);
    });

    // subscribe to the newly created observable to update the UI variables.
    this.countdown.subscribe(value => {
      this.remaining = value;
    },
    err => {},
    () => {
      console.log('done');
    });
  }

}
