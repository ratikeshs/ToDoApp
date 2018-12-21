import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css'],
})
export class EditcategoryComponent implements OnInit {

  id;

  constructor(
    public categoryService: CategoryService,
    private route: ActivatedRoute
  ) {
    this.categoryService = categoryService;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }

  onSubmitClicked() {
    // this.editCategory.emit({
    //   name: this.name
    // });
  }
}
