import { Component } from '@angular/core';
import { DataLoaderService } from '../../services/data-loader.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: any[] = [];
  increment = 4;
  maxItems = 20;
  disableLoadMore = false;
  category: string | null = null;
  validCategories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  constructor(private dataLoaderService: DataLoaderService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');

      if (this.category) {
        if (this.validCategories.includes(this.category)) {
          this.loadProductsByCategory(this.category);
        } else {
          this.router.navigate(['/shop']);
        }
      } else {
        this.loadData();
      }
    });
  }

  loadData() {
    this.dataLoaderService.getProducts().subscribe(data => {
      this.products = data;

      if (this.products.length == this.maxItems) {
        this.disableLoadMore = true;
      }
    });
  }

  loadProductsByCategory(category: string) {
    this.dataLoaderService.getProductsByCategory(category).subscribe(data => {
      this.products = data;
    });
    if (this.products.length <= 8) {
      this.disableLoadMore = true;
    }
  }

  loadMore() {
    this.dataLoaderService.increaseLimit(this.increment);
    this.loadData();
  }
}