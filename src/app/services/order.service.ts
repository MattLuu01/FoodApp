import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  id!: any;
  status!: any;
  countdown:number=-1;
  running: boolean= false;
  isDone: boolean = false;
  constructor(private http: HttpClient) { }



  getRandomId(){
    var min = Math.ceil(100000);
    var max = Math.floor(900000);
    this.id = Math.floor(Math.random() * (max - min) + min);
    return this.id;
  }

  timer()
  {
  this.countdown=30;
  
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
    console.log('Delivered!');
    this.status = "Delivered"
    
  }
    }, 1000);
  }
}
