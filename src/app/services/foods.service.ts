import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foods } from '../interfaces/foods';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  cart: Foods[]=[];
  baseUrl: string = 'http://localhost:3000/foods';
  constructor(private http: HttpClient) { }

  getAllFoods(){
    return this.http.get<Foods[]>(this.baseUrl);
  }
  getFood(foodId: string){
    //http://localhost:3000/feed/1
    return this.http.get<Foods>(this.baseUrl+'/'+foodId)
  }

  addToCart(food: Foods)
  {
    this.cart.push(food);
  }

  emptyCart()
  {
    this.cart =[];
  }
  getCart()
  {
    return this.cart;
  }
  
}
