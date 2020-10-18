/**
 * Stores duration for Pomodoro work unit, short break, and long break in seconds.
 * Defaults to 1500s, 300s, and 900s respectively.
 */
export class TimerConfig {
    pomodoro: number = 1500;
    shortBreak: number = 300;
    longBreak: number = 900;
}