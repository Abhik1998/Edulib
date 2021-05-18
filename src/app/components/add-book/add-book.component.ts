import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

import { BooksService } from '../../services/books.service';
import { IBooks } from '../../books';
import { CATEGORIES, ICategories } from '../../categories';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: [ './add-book.component.scss' ]
})

export class AddBookComponent {
  years: string[] = [];
  categories: string[];
  bookForm = new FormGroup({
    bookName: new FormControl('', [ this.validateNames, Validators.required ]),
    authorName: new FormControl('', [ this.validateNames, Validators.required ]),
    pages: new FormControl('', [ this.validateNumbers, Validators.maxLength(4) ]),
    bookYear: new FormControl('', [ Validators.required ]),
    bookCategory: new FormControl('', [ Validators.required ]),
    downloadLink: new FormControl('', [ this.validateDownloadLink, Validators.required ]),
    buyLink: new FormControl('', [ this.validateBuyLink]),
    imageLink: new FormControl('', [ this.validateImageLink, Validators.required ]),
    description: new FormControl('', [ Validators.minLength(256), Validators.required ]),
  });

  constructor(
    private router: Router,
    private booksService: BooksService,
  ) {
    for (let i = 2021; i > 1900; i--) {
      this.years.push(`${i}`);
    }

    const bookCategory: any = CATEGORIES.map((category: ICategories) => category.subCategories);
    this.categories = bookCategory.flat();
  }

  private validateNames(control: AbstractControl): ValidationErrors {
    return control.value.replace(/[A-Za-z ]/g, '');
  }

  private validateNumbers(control: AbstractControl): ValidationErrors {
    return control.value.replace(/\d/g, '');
  }

  private validateDownloadLink(control: AbstractControl): { validDownloadLink: boolean } | null {
    if (!control.value.startsWith('https://bit.ly/')) {
      return { validDownloadLink: true };
    }

    return null;
  }

  private validateBuyLink(control: AbstractControl): { validBuyLink: boolean } | null {
    if (!control.value.startsWith('https://amzn.to/')) {
      return { validBuyLink: true };
    }

    return null;
  }

  private validateImageLink(control: AbstractControl): { validImageLink: boolean } | null {
    if (!control.value.startsWith('https://')) {
      return { validImageLink: true };
    }

    return null;
  }

  addBookHandler(): void {
    const {
      bookName,
      authorName,
      pages,
      bookYear,
      bookCategory,
      downloadLink,
      buyLink,
      imageLink,
      description,
    } = this.bookForm.value;

    if (this.bookForm.invalid) {
      return;
    }

    const newBook: IBooks = {
      name: bookName,
      author: authorName,
      year: bookYear,
      category: bookCategory,
      image: imageLink,
      pages,
      downloadLink,
      buyLink,
      description,
    };

    this.booksService.books.unshift(newBook);
    this.router.navigate(['/books']);
    localStorage.setItem('books', JSON.stringify(this.booksService.books));
  }
}
