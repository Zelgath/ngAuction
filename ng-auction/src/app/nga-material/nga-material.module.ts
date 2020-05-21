import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTabsModule,
  MatGridListModule
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MATERIAL_MODULES]
})
export class NgaMaterialModule { }
