import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { ToDO } from 'src/app/models/ToDo';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css'],
  providers: [CategoryService]

})
export class NewtodoComponent implements OnInit {

  name: string = "";
  category: string = "";
  status: boolean = false;

  categories;
  
  toDoService: ToDoService;
  constructor(toDoService: ToDoService, categoryService:CategoryService) {
    this.toDoService = toDoService;
    this.categories = categoryService.categorytasks;
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
