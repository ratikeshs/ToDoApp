import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CategoryComponent } from './category/category.component';
import { NewtodoComponent } from './todo/newtodo/newtodo.component';
import { EdittodoComponent } from './todo/edittodo/edittodo.component';
import { EditcategoryComponent } from './category/editcategory/editcategory.component';
import { NewcategoryComponent } from './category/newcategory/newcategory.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  {
    path: 'todo',
    component: TodoComponent,
    children: [
      { path: 'new', component: NewtodoComponent },
      { path: 'edit/:id', component: EdittodoComponent }
    ]
  },

  {
    path: 'category',
    component: CategoryComponent,
    children: [
      { path: 'new', component: NewcategoryComponent },
      { path: 'edit/:id', component: EditcategoryComponent }
    ]
  },

  { path: '**', redirectTo: 'todo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
