import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from '../interfaces/foods';
import { Users } from '../interfaces/users';
import { CartService } from '../services/cart.service';
import { FoodsService } from '../services/foods.service';
import { OrderService } from '../services/order.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  allFoods: Foods[]=[];
  filteredFoods: Foods[] = [];
  searchString = '';
  userId: any;
  user!: Users;
  thisFood!: Foods;
  foodName!: Foods;
  foodPrice!: Foods;
  
  constructor(private orderService: OrderService,private cartService: CartService, private foodsService: FoodsService,private route:ActivatedRoute, private usersService: UsersService, 
    private router: Router) { }

  ngOnInit(): void {
    this.foodsService.getAllFoods().subscribe((response) => {
      console.log(response);
      this.allFoods = response;
      this.filteredFoods = this.allFoods;
    }, 
    (error) => {
      console.log(error);
    })


    this.userId = this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(this.userId).subscribe((response) => {
      this.user=response;
    })
  }
  onClick(thisFood: any,foodName: any, foodPrice: any)
  {
    this.thisFood=thisFood;
    this.foodPrice=foodPrice;
    this.foodName=foodName;
    return this.thisFood,this.foodName, this.foodPrice;
  }
  addFood(food:Foods)
  {
    this.foodsService.addToCart(food);
    console.log(food);
  }

  filterFoods(){
    this.allFoods = this.filteredFoods.filter(
      (food: Foods) => food.foodName.toLocaleLowerCase().indexOf(this.searchString.toLocaleLowerCase()) != -1
    );
  }
  placeOrder(){
    this.orderService.status = "Placed";
    this.orderService.running = false;
    this.cartService.orderPlaced = true;
    console.log(this.cartService.orderPlaced);
    return this.cartService.orderPlaced;
  }

}
