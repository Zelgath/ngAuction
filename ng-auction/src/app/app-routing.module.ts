import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductResolve } from './shared/services/product-resolve.service';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products',  loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)},
  {path: 'products/:productId', loadChildren: () => import ('./product/product.module').then(m => m.ProductModule),
  resolve: {product: ProductResolve}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
