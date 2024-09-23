import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
