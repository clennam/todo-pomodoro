import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-widget',
  templateUrl: './timer-widget.component.html',
  styleUrls: ['./timer-widget.component.scss']
})
export class TimerWidgetComponent implements OnInit, OnChanges {
  @Input() pauseEnabled: boolean;
  @Input() duration: number;
  remaining: number;

  countdownSub: Subscription;

  isRunning: boolean = false;
  isPaused: boolean = false;

  constructor() { }

  ngOnInit() {
    this.remaining = this.duration;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.duration) {
      this.stop();
    }
  }

  start() {
    this.remaining = this.duration;
    this.unpause();
  }

  stop() {
    this.pause();
    this.isPaused = false;
    this.remaining = this.duration;
  }

  pause() {
    this.isRunning = false;
    this.isPaused = true;
    this.countdownSub?.unsubscribe();
  }

  unpause() {
    this.isRunning = true;
    this.isPaused = false;
    this.startCountdown(this.remaining);
  }

  get showPauseButton() {
    return this.pauseEnabled && (this.countdownSub && !this.countdownSub.closed || this.isPaused);
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
    this.countdownSub = countdown.subscribe(
      value => {
        this.remaining = value;
      },
      err => { },
      () => {
        console.log('timer complete');
      }
    );
  }

}
