import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MAT_AUCTION_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule,
  BrowserAnimationsModule,
  MatTabsModule,
  MatDividerModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MAT_AUCTION_MODULES]
})
export class AuctionMaterialModule { }
