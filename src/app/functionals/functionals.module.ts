import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerWidgetComponent } from './timer-widget/timer-widget.component';
import { TimerDisplayPipe } from './pipes/timer-display/timer-display.pipe';
import { TimerOptionsComponent } from './timer-options/timer-options.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    TimerWidgetComponent,
    TimerDisplayPipe,
    TimerOptionsComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TimerWidgetComponent,
    TimerOptionsComponent,
    TodoComponent
  ]
})
export class FunctionalsModule { }
