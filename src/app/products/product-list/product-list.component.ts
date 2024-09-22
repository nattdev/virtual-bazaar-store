import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: any[] = [];

  constructor(private productsServices: ProductsService) {}

  ngOnInit() {
    this.logData();
  }

  logData() {
    this.productsServices.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
