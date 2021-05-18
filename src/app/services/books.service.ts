import { Injectable } from '@angular/core';
import { BOOKS, IBooks } from '../books';

@Injectable({ providedIn: 'root' })

export class BooksService {
  books: IBooks = BOOKS;
  subCategoriesText: string = 'All';
  opened: boolean = true;
  darkMode: boolean = false;
}
