import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/services/product.service';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'nga-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;
  suggestedProducts$: Observable<Product[]>;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
                this.product$ = this.route.paramMap.pipe(
                  map(params => parseInt(params.get('productId') || '', 10)),
                  filter(productId => !!productId),
                  switchMap(productId => this.productService.getById(productId))
                );

                this.suggestedProducts$ = this.productService.getAll();
              }

  ngOnInit(): void {
  }

}
