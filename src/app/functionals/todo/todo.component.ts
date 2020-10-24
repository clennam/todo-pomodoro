import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  private _isComplete: boolean = false;
  get isComplete(): boolean {
    return this._isComplete;
  }
  toggleComplete() {
    this._isComplete = !this._isComplete;
  }

  private _isHover: boolean = false;
  get isHover(): boolean {
    return this._isHover;
  }
  toggleHover() {
    this._isHover = !this._isHover;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
