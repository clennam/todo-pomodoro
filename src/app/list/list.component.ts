import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todoList = [0];
  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.todoList.push(Math.max(...this.todoList) + 1);
  }

  deleteItem(id: number) {
    let index = this.todoList.indexOf(id);
    if (index > -1) {
      this.todoList.splice(index, 1);
    }
  }

}
