import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TimerConfig } from '../models';
import 'jquery';

@Component({
  selector: 'app-timer-options',
  templateUrl: './timer-options.component.html',
  styleUrls: ['./timer-options.component.scss']
})
export class TimerOptionsComponent implements OnInit, OnChanges {
  @Input() modalId: string;
  @Input() timerConfig: TimerConfig = new TimerConfig();
  @Output() saveOptions: EventEmitter<TimerConfig> = new EventEmitter<TimerConfig>();

  optionsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.timerConfig) {
      this.optionsForm = this.formBuilder.group(this.timerConfig);
    }
  }

  onSubmit(config: TimerConfig) {
    this.saveOptions.emit(config);
    this.optionsForm.reset();
    ($(`#${this.modalId}`) as any).modal('hide');
  }

}
