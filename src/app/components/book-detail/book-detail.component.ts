import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { IBooks } from '../../books';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.scss' ]
})

export class BookDetailComponent implements OnInit {
  book: IBooks;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.book = this.booksService.books.find((listBook: IBooks) => listBook.name.replace(/[ ]/g, '_') === params.get('name'));
    });
  }
}
