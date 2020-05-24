import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_URL = 'http://localhost:3000/products';
  constructor(private http: HttpClient,
              private toast: MatSnackBar,
              private router: Router) { }

  getAll(withoutId?: number): Observable<Product[]> {
    return withoutId ? this.http.get<Product[]>(this.API_URL).pipe(
     map(projects => projects.filter(project => project.id !== withoutId))
    ) : this.http.get<Product[]>(this.API_URL);
  }

  getById(productId: number): Observable<Product>  {
    return this.http.get<Product>(`${this.API_URL}/${productId}`);
  }
}
