import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSuggestionComponent } from './product-suggestion/product-suggestion.component';
import { RouterModule } from '@angular/router';
import { NgaMaterialModule } from '../nga-material/nga-material.module';
import { ProductResolve } from '../shared/services/product-resolve.service';



@NgModule({
  declarations: [ProductComponent, ProductDetailComponent, ProductSuggestionComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {path: '', component: ProductComponent}
    ]),
    NgaMaterialModule
  ],
})
export class ProductModule { }
