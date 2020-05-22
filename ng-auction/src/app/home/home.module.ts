import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgaMaterialModule } from '../nga-material/nga-material.module';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgaMaterialModule,
    RouterModule.forChild([{path: '', component: HomeComponent}])
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
