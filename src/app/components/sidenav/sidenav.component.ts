import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { BOOKS, IBooks } from '../../books';
import { CATEGORIES, ICategories } from '../../categories';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})

export class SidenavComponent implements OnInit {
  categories: ICategories[] = CATEGORIES;
  sidenavMode: string;
  opened: boolean = this.booksService.opened;
  darkMode: boolean = this.booksService.darkMode;
  darkModeIcon: string = '../../../assets/images/dark_mode.png';
  lightModeIcon: string = '../../../assets/images/light_mode.png';
  darkModeBook: string = '../../../assets/images/dark_mode_book.png';
  lightModeBook: string = '../../../assets/images/book.png';

  constructor(
    public booksService: BooksService,
    public breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 900px)'])
      .subscribe((state: BreakpointState): void => {
        if (state.matches) {
          this.opened = true;
          this.sidenavMode = 'side';
        } else {
          this.opened = false;
          this.sidenavMode = 'push';
        }
      });
  }

  switchModesHandler(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('mode', JSON.stringify(this.darkMode));
  }

  allBooksHandler(): void {
    this.booksService.subCategoriesText = 'All';
    this.booksService.books = BOOKS;
    this.categories.map((category: ICategories) => category.showSubCategories = false);
  }

  subCategoryItemLength(categoryItem: string): number {
    return BOOKS.filter((book: IBooks) => book.category.toLowerCase() === categoryItem.toLowerCase()).length;
  }

  subCategoriesHandler(categoryItem: string): void {
    this.booksService.subCategoriesText = categoryItem;
    this.booksService.books = BOOKS.filter((book: IBooks) => book.category.toLowerCase() === categoryItem.toLowerCase());
  }
}
