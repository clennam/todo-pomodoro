import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerWidgetComponent } from './timer-widget/timer-widget.component';

@NgModule({
  declarations: [
    TimerWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimerWidgetComponent
  ]
})
export class FunctionalsModule { }
