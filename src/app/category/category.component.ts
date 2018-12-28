import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  @Output() addNewCategoryButtonClicked = new EventEmitter();
  categorytasks;

  categorytask: Category;
  index: number;

  categorylistPage = true;
  newcategoryform = false;
  categoryeditform = false;


  constructor(categoryService:CategoryService) {
    this.categorytasks=categoryService.categorytasks;
   }

  ngOnInit() {

  }


  showNewCategoryForm() {
    console.log("hi");
    this.categorylistPage = false;
    this.newcategoryform = true;

  }

  onCategoryAdded(category) {
    this.categorytasks.push(category);
    this.categorylistPage = true;
    this.newcategoryform = false;
  }

  showEditCategoryForm(toDoEdit) {
    console.log("hi");
    this.index=toDoEdit.index;
    this.categorytask=this.categorytasks[this.index];
    this.categorylistPage = false;
    this.newcategoryform = false;
    this.categoryeditform = true;

  }


  onEditCategory(toDoEdit) {
    this.index=toDoEdit.index;
    this.categorytask=this.categorytasks[this.index];
    //this.categories.push(category);
    this.categorylistPage = true;
    this.newcategoryform = false;
    this.categoryeditform = false;

  }

}
