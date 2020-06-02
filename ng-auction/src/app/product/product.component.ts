import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from '../shared/services/product.service';
import { map, filter, switchMap } from 'rxjs/operators';
import { ProductResolve } from '../shared/services/product-resolve.service';
import { AutocompleteService } from '../shared/services/autocomplete.service';

@Component({
  selector: 'nga-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnDestroy{
  product: Product;
  suggestedProducts$: Observable<Product[]>;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private autocompleteService: AutocompleteService
              ) {
                this.suggestedProducts$ = this.getId().pipe(
                  switchMap(productId => this.productService.getAll(productId))
                );
                this.loadProduct();
                this.autocompleteService.informAutocomplete(true);
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

  ngOnDestroy(): void {
    this.autocompleteService.informAutocomplete(false);
  }

}
