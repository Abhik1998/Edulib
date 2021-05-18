import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    MaterialModule,
  ],
  declarations: [ BooksComponent ],
})

export class BooksModule { }
