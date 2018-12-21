import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{CategoryService} from 'src/app/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css'],
})
export class ListcategoryComponent implements OnInit {
  categories;
  

  constructor(
    categoryService:CategoryService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.categories=categoryService.categorytasks;
   }

  ngOnInit() {
  }

  onNewButtonClick() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  deleteFieldValue(category) {
    this.categories = this.categories.filter(t => t.name !== category.name);
  }

  // onEditButtonClick() {
  //   this.editCategoryButtonClicked.emit();
  // }

  onEditButtonClicked(index) {
    this.router.navigate(['/category', 'edit', index]);
   
  }

}
