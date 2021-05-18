import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

import { AddBookComponent } from './add-book.component';
import { AddBookRoutingModule } from './add-book-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddBookRoutingModule,
    MaterialModule,
  ],
  declarations: [ AddBookComponent ],
})

export class AddBookModule { }
