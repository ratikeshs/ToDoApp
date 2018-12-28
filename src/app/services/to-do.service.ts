import { Injectable } from '@angular/core';
import { ToDO } from '../models/ToDo';

// @Injectable({
//   providedIn: 'root'
// })\
@Injectable()
export class ToDoService {
  tasks= [
    new ToDO('Angular Session One', 'CDAC', true),
    new ToDO('Angular Session Two', 'CDAC', false),
    new ToDO('Angular Session Three', 'CDAC', false),
  ];

  constructor() { }
}
