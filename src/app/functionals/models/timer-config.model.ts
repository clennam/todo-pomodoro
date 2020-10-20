import { SoundsConfig } from './sounds-config.model';

/**
 * Stores durations for Pomodoro work unit, short break, and long break in seconds.
 * Defaults to 1500s, 300s, and 900s respectively.
 * 
 * Also keeps track of whether the pausing and audio features are activated.
 */
export class TimerConfig {
    pomodoro: number = 1500;
    shortBreak: number = 300;
    longBreak: number = 900;
    pauseEnabled: boolean = false;
    soundsEnabled: SoundsConfig = new SoundsConfig();
}