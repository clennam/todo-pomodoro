import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerWidgetComponent } from './timer-widget/timer-widget.component';
import { TimerDisplayPipe } from './pipes/timer-display/timer-display.pipe';

@NgModule({
  declarations: [
    TimerWidgetComponent,
    TimerDisplayPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimerWidgetComponent
  ]
})
export class FunctionalsModule { }
