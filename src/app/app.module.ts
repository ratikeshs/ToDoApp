import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './todo/list/list.component';
import { NewtodoComponent } from './todo/newtodo/newtodo.component';
import { EdittodoComponent } from './todo/edittodo/edittodo.component';
import { CategoryComponent } from './category/category.component';
import { ListcategoryComponent } from './category/listcategory/listcategory.component';
import { EditcategoryComponent } from './category/editcategory/editcategory.component';
import { NewcategoryComponent } from './category/newcategory/newcategory.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    ListComponent,
    NewtodoComponent,
    EdittodoComponent,
    CategoryComponent,
    ListcategoryComponent,
    EditcategoryComponent,
    NewcategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
