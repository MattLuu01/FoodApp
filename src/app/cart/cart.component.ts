import { Component, OnInit } from '@angular/core';
import { Foods } from '../interfaces/foods';
import { Order } from '../interfaces/order';
import { CardsService } from '../services/cards.service';
import { CartService } from '../services/cart.service';
import { FoodsService } from '../services/foods.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Foods[]=[];
  total =0;
  constructor(private orderService: OrderService,private foodsService: FoodsService,private cartService: CartService) { }

  ngOnInit(): void {
    this.cart=this.foodsService.getCart();
    this.findTotal();
  }
  findTotal(){
    for(var x =0;x<this.cart.length;x++)
    {
      this.total=this.cart[x].cost+ this.total;
    }
  }
  placeOrder(){
    this.orderService.status = "Placed";
    this.orderService.running = false;
    this.cartService.orderPlaced = true;
    console.log(this.cartService.orderPlaced);
    this.foodsService.cart= [];
    return this.cartService.orderPlaced;
  }




}
