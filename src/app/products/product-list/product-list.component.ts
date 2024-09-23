import { Component } from '@angular/core';
import { DataLoaderService } from '../../services/data-loader.service';

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

  constructor(private dataLoaderService: DataLoaderService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataLoaderService.getProducts().subscribe(data => {
      this.products = data;

      if (this.products.length == this.maxItems) {
        this.disableLoadMore = true;
      }
    });
  }

  loadMore() {
    this.dataLoaderService.increaseLimit(this.increment);
    this.loadData();
  }
}