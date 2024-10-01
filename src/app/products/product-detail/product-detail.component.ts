import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  productId: number | null = null;
  product: any | null = null;

  constructor(
    private route: ActivatedRoute,
    private products: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));

      if (this.productId) {
        this.getProductDetails(this.productId);
      }
    });
  }

  getProductDetails(id: number): void {
    this.products.getProductById(id).subscribe(data => {
      this.product = data;
      console.log(this.product);
    });
  }
}
