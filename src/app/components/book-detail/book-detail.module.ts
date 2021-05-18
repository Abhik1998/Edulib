import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

import { BookDetailComponent } from './book-detail.component';
import { BookDetailRoutingModule } from './book-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BookDetailRoutingModule,
    MaterialModule,
  ],
  declarations: [ BookDetailComponent ],
})

export class BookDetailModule { }
