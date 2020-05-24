import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from '../shared/services/product.service';
import { map, filter, switchMap } from 'rxjs/operators';
import { ProductResolve } from '../shared/services/product-resolve.service';

@Component({
  selector: 'nga-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product: Product;
  suggestedProducts$: Observable<Product[]>;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              ) {
                this.suggestedProducts$ = this.getId().pipe(
                  switchMap(productId => this.productService.getAll(productId))
                );
                this.loadProduct();
              }

  private loadProduct() {
    this.route.data.subscribe((data: { product: Product}) => {
      this.product = data.product;
    });
  }

  private getId() {
    return this.route.paramMap.pipe(
      map(params => parseInt(params.get('productId') || '', 10)),
      filter(productId => !!productId));
  }

}
