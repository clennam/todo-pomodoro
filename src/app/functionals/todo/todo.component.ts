import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements AfterViewInit, OnDestroy {
  @Input() index: number;

  private _isComplete: boolean = false;
  get isComplete(): boolean {
    return this._isComplete;
  }
  toggleComplete() {
    if (this.task) {
      this._isComplete = !this._isComplete;
    } else {
      this.show();
    }
  }

  private _isHover: boolean = false;
  get isHover(): boolean {
    return this._isHover;
  }
  toggleHover() {
    this._isHover = !this._isHover;
  }

  task: string;

  private button: any;
  private tooltip: any;
  private popperRef: any;

  constructor() { }

  ngAfterViewInit() {
    this.button = document.querySelector(`#button-${this.index}`);
    this.tooltip = document.querySelector(`#tooltip-${this.index}`);
  }

  ngOnDestroy() {
    this.destroy();
  }

  create() {
    if (!this.popperRef) {
      this.popperRef = createPopper(this.button, this.tooltip, {
        placement: 'top',
      });
    }
  }

  destroy() {
    this.popperRef?.destroy();
    this.popperRef = undefined;
  }

  show() {
    this.tooltip.setAttribute('data-show', '');
    this.create();
    this.popperRef?.forceUpdate();
    setTimeout(() => this.hide(), 5000);
  }

  hide() {
    this.tooltip.removeAttribute('data-show');
    this.destroy();
  }

}
