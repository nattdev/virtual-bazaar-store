import { Component } from '@angular/core';

@Component({
  selector: 'app-arrivals',
  standalone: true,
  imports: [],
  templateUrl: './arrivals.component.html',
  styleUrl: './arrivals.component.scss'
})
export class ArrivalsComponent {
  products = [
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    }
  ]
}
