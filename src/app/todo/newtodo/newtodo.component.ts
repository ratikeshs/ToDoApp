import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { ToDO } from 'src/app/models/ToDo';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})
export class NewtodoComponent implements OnInit {

  name: string = "";
  category: string = "";
  status: boolean = false;

  toDoService: ToDoService;

  constructor(toDoService: ToDoService) {
    this.toDoService = toDoService;
  }

  ngOnInit() {
  }

  onSubmitClicked() {
    this.toDoService.tasks.push(
      new ToDO(this.name, this.category, this.status)
    );

    this.name = "";
    this.category = "";
    this.status = false;

  }
}
