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
      let fbCompatConfig = this.createFBCompatConfig(this.timerConfig);
      this.optionsForm = this.formBuilder.group(fbCompatConfig);
    }
  }

  onSubmit(config: TimerConfig) {
    config = this.convertConfigUnits(config, true);
    this.saveOptions.emit(config);
    this.optionsForm.reset(this.convertConfigUnits(this.timerConfig));
    this.closeModal();
  }

  get modalRef() {
    return ($(`#${this.modalId}`) as any);
  }

  closeModal() {
    this.optionsForm.reset(this.convertConfigUnits(this.timerConfig));
    this.modalRef.modal('hide');
  }

  /**
   * Since soundsEnabled is a nested object, we need to create a FormGroup for it
   * and nest it within the larger object in order for FormBuilder to create an
   * appropriate FormGroup.
   * 
   * This method creates an intermediate `any` object for FormBuilder to use instead of the
   * `timerConfig` object itself.
   * @param timerConfig timerConfig from parent component
   */
  createFBCompatConfig(timerConfig: TimerConfig): any {
    let unitsConvertedConfig = this.convertConfigUnits(timerConfig);
    return {
      ...unitsConvertedConfig,
      soundsEnabled: this.formBuilder.group(unitsConvertedConfig.soundsEnabled)
    }
  }

  /**
   * Converts durations in timerConfig from seconds to minutes,
   * or, if `reverse` param is true, from minutes to seconds.
   * Needs to be used to display minutes in options UI modal.
   * 
   * @param timerConfig timerConfig from parent component
   * @param reverse if true, convert from minutes to seconds
   */
  convertConfigUnits(timerConfig: TimerConfig, reverse?: boolean): TimerConfig {
    let returnConfig = { ...timerConfig };

    if (reverse) {
      returnConfig.pomodoro *= 60;
      returnConfig.shortBreak *= 60;
      returnConfig.longBreak *= 60;
    } else {
      returnConfig.pomodoro /= 60;
      returnConfig.shortBreak /= 60;
      returnConfig.longBreak /= 60;
    }

    return returnConfig;
  }

}
