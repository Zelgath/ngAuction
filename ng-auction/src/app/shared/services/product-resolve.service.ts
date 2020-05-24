import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ProductResolve implements Resolve<Product> {
    constructor(private productService: ProductService,
                private router: Router,
                private toast: MatSnackBar) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Observable<never> {
        const id = parseInt(route.paramMap.get('productId'), 10);

        return this.productService.getById(id).pipe(
            catchError(err => {
                if (err.status === 404) {
                    this.toast.open(err.message);
                    this.router.navigate(['/dashboard/products']);
                    return EMPTY;
                }
            }),
            take(1),
            mergeMap(product => {
                if (product) {
                    return of (product);
                }
            })
        );
    }
}
