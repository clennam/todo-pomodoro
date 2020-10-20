import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerWidgetComponent } from './timer-widget/timer-widget.component';
import { TimerDisplayPipe } from './pipes/timer-display/timer-display.pipe';
import { TimerOptionsComponent } from './timer-options/timer-options.component';

@NgModule({
  declarations: [
    TimerWidgetComponent,
    TimerDisplayPipe,
    TimerOptionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimerWidgetComponent,
    TimerOptionsComponent
  ]
})
export class FunctionalsModule { }
