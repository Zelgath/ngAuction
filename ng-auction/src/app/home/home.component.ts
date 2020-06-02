import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Product } from '../models/product.model';
import {MediaObserver} from '@angular/flex-layout/';
import { ProductService } from '../shared/services/product.service';
import { map, tap, switchMap, filter } from 'rxjs/operators';
import { SearchService } from '../shared/services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly columns$: Observable<number>;
  products$: Observable<Product[]>;
  searchValue: string;

  readonly breakpointsToColumnsNumber = new Map([
    ['xs', 1],
    ['sm', 2],
    ['md', 3],
    ['lg', 4],
    ['xl', 5]
  ]);

  constructor(private media: MediaObserver,
              private productService: ProductService,
              private searchService: SearchService) {
                this.products$ = this.searchService.getSearch().pipe(
                  switchMap(value => this.productService.getFiltered(value))
                );
                // tslint:disable-next-line: deprecation
                this.columns$ = this.media.media$.pipe(
                  map(mc => this.breakpointsToColumnsNumber.get(mc.mqAlias))
                );
               }

}
