import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {
  categorytasks = [
    new Category('CDAC'),
    new Category('New Joinee'),
    new Category('Fresher'),
  ];

  constructor() { }
}
