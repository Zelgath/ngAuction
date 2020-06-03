import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { SearchService } from './search.service';
import { ProductService } from './product.service';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor(private productService: ProductService) {}

  autocompleteSubject = new Subject<Product []>();

  informAutocomplete(value: string) {
    this.productService.getFiltered(value).subscribe(
      products => this.autocompleteSubject.next(products)
    );
  }
}
