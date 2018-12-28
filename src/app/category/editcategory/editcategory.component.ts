import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
  paramSubscription;
  @ViewChild ('category') category: ElementRef;

  constructor(
    public categoryService: CategoryService,
    private route: ActivatedRoute
  ) {
    this.categoryService = categoryService;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.paramSubscription=this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }
  ngOnDestroy(){
    this.paramSubscription.unsubscribe();
  }

  onSubmitClicked(
    name: HTMLInputElement
  ){
    this.categoryService.categorytasks[this.id].category=name.value;
  }
}
