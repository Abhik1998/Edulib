import { Component, OnInit } from '@angular/core';

import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    const savedMode = JSON.parse(localStorage.getItem('mode'));
    const savedBooks = JSON.parse(localStorage.getItem('books'));

    if (savedMode) {
      this.booksService.darkMode = savedMode;
    }

    if (savedBooks) {
      this.booksService.books = savedBooks;
    }
  }
}
