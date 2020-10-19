import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-widget',
  templateUrl: './timer-widget.component.html',
  styleUrls: ['./timer-widget.component.scss']
})
export class TimerWidgetComponent implements OnInit {
  @Input() duration: number;
  countdownSub: Subscription;
  remaining: number;

  isRunning: boolean = false;

  constructor() { }

  ngOnInit() {
    this.remaining = this.duration;
  }

  start() {
    this.isRunning = true;
    this.startCountdown(this.duration);
  }

  stop() {
    this.pause();
    this.remaining = this.duration;
  }

  private pause() {
    this.isRunning = false;
    this.countdownSub?.unsubscribe();
  }

  private unpause() {
    this.isRunning = true;
    this.startCountdown(this.remaining);
  }

  private startCountdown(duration: number) {
    // declare countdown observable
    let countdown: Observable<number> = new Observable<number>(subscriber => {
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
    this.countdownSub = countdown.subscribe(value => {
      this.remaining = value;
    },
      err => { },
      () => {
        console.log('done');
      });
  }

}
