import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() showCategoryList = new EventEmitter();
  @Output() showToDoList = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onCategoryButtonClick() {
    this.showCategoryList.emit();
  }

  onToDoButtonClick(){
    this.showToDoList.emit();
  }
}
