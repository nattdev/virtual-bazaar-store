import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {
  private baseUrl = 'https://fakestoreapi.com/products';
  private limit = 8;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    const url = `${this.baseUrl}?limit=${this.limit}`;

    const products = this.http.get(url);
    
    return products;
  }

  increaseLimit(increment: number): void {
    this.limit += increment;
  }
}
