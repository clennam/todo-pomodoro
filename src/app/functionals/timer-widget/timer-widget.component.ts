import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SoundsConfig } from '../models';

@Component({
  selector: 'app-timer-widget',
  templateUrl: './timer-widget.component.html',
  styleUrls: ['./timer-widget.component.scss']
})
export class TimerWidgetComponent implements OnInit, OnChanges {
  @Input() soundsEnabled: SoundsConfig;
  @Input() pauseEnabled: boolean;
  @Input() duration: number;
  remaining: number;

  countdownSub: Subscription;

  isRunning: boolean = false;
  isPaused: boolean = false;

  crankAudio: HTMLAudioElement;
  tickingAudio: HTMLAudioElement;
  dingAudio: HTMLAudioElement;

  constructor() { }

  ngOnInit() {
    this.remaining = this.duration;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.duration) {
      this.stop();
    }
    if (changes.soundsEnabled && changes.soundsEnabled.currentValue) {
      this.loadSounds();
    }
  }

  start() {
    this.remaining = this.duration;
    this.crankAudio?.play().then(() => this.tickingAudio?.play());
    this.unpause();
  }

  stop() {
    this.tickingAudio?.pause();
    this.pause();
    this.isPaused = false;
    this.remaining = this.duration;
  }

  pause() {
    this.tickingAudio?.pause();
    this.isRunning = false;
    this.isPaused = true;
    this.countdownSub?.unsubscribe();
  }

  unpause() {
    this.tickingAudio?.play();
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
        if (this.isRunning) { this.dingAudio?.play() };
        this.stop();
      }
    );
  }

  /**
   * Loads sounds based on currently set options in the config
   */
  loadSounds() {
    if (this.soundsEnabled.crankEnabled) this.crankAudio = new Audio('assets/aud/crank.wav');
    if (this.soundsEnabled.dingEnabled) this.dingAudio = new Audio('assets/aud/ding.wav');
    if (this.soundsEnabled.tickEnabled) {
      this.tickingAudio = new Audio('assets/aud/ticking.wav');
      this.tickingAudio.loop = true;
    }
  }

}
