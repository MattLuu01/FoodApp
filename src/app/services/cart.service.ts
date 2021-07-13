import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  orderPlaced: boolean = false;
  baseUrl: string = 'http://localhost:3000/cart';
  constructor(private http: HttpClient) { }

  
  placeOrder()
  {
    this.orderPlaced=true;
    return this.orderPlaced;
  }

  checkOrder()
  {
    return this.orderPlaced;
  }
  
}
