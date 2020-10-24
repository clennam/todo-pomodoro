import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        opacity: 1
      })),
      state('hidden', style({
        width: '0%',
        opacity: 0
      })),
      transition('show => hidden', [
        animate('0.09s')
      ]),
      transition('hidden => show', [
        animate('0.09s')
      ]),
    ]),
  ]
})
export class AppComponent {
  title = 'todo/pomodoro';

  private _arrowsShown: boolean = false;
  get arrowsShown(): boolean {
    return this._arrowsShown;
  }
  toggleArrows() {
    this._arrowsShown = !this._arrowsShown;
  }
}
