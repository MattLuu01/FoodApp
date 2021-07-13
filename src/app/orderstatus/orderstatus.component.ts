import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../interfaces/cart';
import { Order } from '../interfaces/order';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {
  order!: Order;
  id!: any;
  status!: any;
  countdown!:any;
  hasBeenPlaced:boolean = false;
  constructor(private router: Router,private cartService: CartService, private orderService: OrderService) { }

  ngOnInit(): void {
    
    this.hasBeenPlaced=this.cartService.checkOrder()
    console.log(this.hasBeenPlaced);
    if(this.hasBeenPlaced==true && this.orderService.running == false)
    {
      
    this.orderService.timer();
    this.orderService.getRandomId();
    this.orderService.running = true;
    }
    this.getRandomId();
    this.timer();
    
    }
    getRandomId(){
      this.id=this.orderService.id;
    }

    timer()
    {
    this.countdown=this.orderService.countdown;
    this.status = this.orderService.status;
    if(this.status != "Delivered")
    {
      const interval = setInterval(() => {
        console.log( this.countdown);
        this.countdown--;
        if(this.countdown>=20)
        {
          this.status = "Placed"
        }
        else if(this.countdown>=10 &&this.countdown<20)
        {
          this.status = "Picked Up"
        }
        else if (this.countdown == 0 ) {
          clearInterval(interval);
          console.log('Ding!');
          this.status = "Delivered"
        }
      }, 1000);
    }

  }
  cancelOrder(){
    this.cartService.orderPlaced = false;
    this.orderService.running = false;
    this.router.navigate(['feed']);
  }
}
