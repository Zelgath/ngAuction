import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_URL = '/data/products.json';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  getById(productId: number): Observable<Product> {
    return this.http.get<Product[]>(this.API_URL).pipe(
      map(products => products.find(product => product.id === productId))
    );
  }
}
