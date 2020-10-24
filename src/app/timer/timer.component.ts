import { AfterViewInit, Component, QueryList, ViewChildren, ChangeDetectorRef, HostBinding } from '@angular/core';
import { TimerConfig } from '../functionals/models';
import { TimerWidgetComponent } from '../functionals/timer-widget/timer-widget.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements AfterViewInit {
  timerConfig: TimerConfig = new TimerConfig();
  @ViewChildren(TimerWidgetComponent) timerWidgetList: QueryList<TimerWidgetComponent>;

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.initTabSwitchingBehaviour();
  }

  /**
   * Stops all of the currently instantiated timerWidgets.
   * @param disableButtons when *true*, disables start/stop/pause buttons in timerWidgets as well
   */
  stopAllTimers(disableButtons?: boolean) {
    this.timerWidgetList.forEach(timerWidget => {
      timerWidget.stop()

      if (disableButtons) {
        timerWidget.setDisabled(true);
      }
    });
  }

  updateOptions(config: TimerConfig) {
    this.timerConfig = config;
    this.stopAllTimers();
  }

  /**
   * Registers JQuery event handlers to stop all timers when tabs are changed (for example,
   * switching from 'Pomodoro' to 'Short Break' tab) and prevent users from interacting with
   * the timer when the tabs are fading in/out.
   */
  initTabSwitchingBehaviour() {
    $('#timerTablist .nav-link')
      .on('hide.bs.tab', (event: any) => {
        this.stopAllTimers(true);
        this.cd.detectChanges();
      })
      .on('shown.bs.tab', (event: any) => {
        this.timerWidgetList.forEach(timerWidget => {
          timerWidget.setDisabled(false);
        });
        this.cd.detectChanges();
      });
  }
}
