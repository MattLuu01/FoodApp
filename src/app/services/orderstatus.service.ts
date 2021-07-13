import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderstatusService {
  baseUrl: string = 'http://localhost:3000/order'
  order: Order []=[];
  constructor(private http: HttpClient) {
   }

   getAllOrders(){
    //return this.allProducts;
    //this.http.get - fetch
    //this.http.put - update
    //this.http.post - insert
    //this.http.delete - delete
     return this.http.get<Order[]>(this.baseUrl);
  }

  getAllAddressesOfUser(){
    
  }
  
  getOrder(orderId: string){
    return this.http.get<Order>(this.baseUrl+'/'+orderId)
  }

  addOrder(order: Order, orderId: any){

    order.id = orderId;
    return this.http.post<Order>(this.baseUrl, order);
  }


}
