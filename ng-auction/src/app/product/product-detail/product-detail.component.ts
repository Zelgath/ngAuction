import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input() product: Product;
}
