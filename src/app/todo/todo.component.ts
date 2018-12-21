import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/to-do.service';
import { ToDO } from '../models/ToDo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [ToDoService]
})
export class TodoComponent implements OnInit {
  tasks;
  task: ToDO;
  index: number;


  constructor(toDoService: ToDoService) {
    this.tasks = toDoService.tasks;
  }

  ngOnInit() {
  }

}
