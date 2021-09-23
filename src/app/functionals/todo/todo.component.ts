import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements AfterViewInit, OnDestroy {
  @Input() id: number;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

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

  private _isHoverDelete: boolean = false;
  get isHoverDelete(): boolean {
    return this._isHoverDelete;
  }
  toggleHoverDelete() {
    this._isHoverDelete = !this._isHoverDelete;
  }

  task: string;

  private button: any;
  private tooltip: any;
  private popperRef: any;

  constructor() { }

  ngAfterViewInit() {
    this.button = document.querySelector(`#button-${this.id}`);
    this.tooltip = document.querySelector(`#tooltip-${this.id}`);
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

  emitDelete() {
    this.ngOnDestroy();
    this.delete.emit(this.id);
  }

}
