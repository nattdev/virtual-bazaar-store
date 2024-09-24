import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { SlicePipe } from '@angular/common';
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlicePipe, CarouselComponent],
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
