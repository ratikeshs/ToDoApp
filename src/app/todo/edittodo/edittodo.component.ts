import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { ToDO } from 'src/app/models/ToDo';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css'],
  providers: [CategoryService]
  
})
export class EdittodoComponent implements OnInit {
  id;
  categories;
  paramSubscription;
  @ViewChild('category') category: ElementRef;

  constructor(
    public toDoService: ToDoService,
    private route: ActivatedRoute,
    categoryService:CategoryService
    ) {
      this.categories = categoryService.categorytasks;
     }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.paramSubscription=this.route.params.subscribe(
      (params:Params) =>{
        this.id=params['id'];
      }
    );
  }

  ngOnDestroy(){
    this.paramSubscription.unsubscribe();
  }

  onSubmitClicked(
    name: HTMLInputElement,
    status: HTMLInputElement
  ){
    this.toDoService.tasks[this.id].name=name.value;
    this.toDoService.tasks[this.id].category=this.category.nativeElement.value;
    this.toDoService.tasks[this.id].status=status.checked;
  }

  
}

