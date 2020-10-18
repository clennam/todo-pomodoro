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
    this.countdown = this.startCountdown(this.duration);
    this.countdown.subscribe(value => {
      this.remaining = value;
    },
    err => {},
    () => {
      console.log('done');
    });
  }

  private startCountdown(duration: number): Observable<number> {
    return new Observable<number>(subscriber => {
      subscriber.next(duration);
      let timer = setInterval(() => {
        subscriber.next(--duration);
        if (duration <= 0) {
          clearInterval(timer);
          subscriber.complete();
        }
      }, 1000);
    });
  }

}
