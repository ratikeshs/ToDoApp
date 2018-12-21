import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent implements OnInit {

  name: string = "";

  categoryService: CategoryService;

  constructor( categoryService: CategoryService ) {
    this.categoryService= categoryService;
   }

  ngOnInit() {
  }
  onSubmitClicked() {
    this.categoryService.categorytasks.push(
      new Category(this.name)
    );
  }

}
