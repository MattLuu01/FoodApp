import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cards } from 'src/app/interfaces/cards';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})
export class CarddetailsComponent implements OnInit {

  allCards:Cards[] =[];
  allCardsOfUser:Cards[] =[]
  email!:any;
  constructor(private cardsService: CardsService,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.cardsService.getAllCards().subscribe((response) => {
      console.log(response);
      this.allCards =response;
      this.getCardsOfUser();

    }, 
    (error) => {
      console.log(error);
    })
  }
  getCardsOfUser(){
    this.email = this.authenticationService.userValue.userEmail;
  
    for(var x =0;x<this.allCards.length;x++)
    {
      if(this.allCards[x].email == this.email)
        {
          this.allCardsOfUser.push(this.allCards[x]);
        }
      
      
          // this.loggedIn.emit(true);
          // this.router.navigate(['/feed',this.allUsers[x].id]);
          
          //return;
    }
  }

  deleteCards(card : Cards)
  {
    this.cardsService.deleteCard(card).subscribe((response) => {
      console.log(response);
      this.router.navigate(['carddetails']);
  })
  }

}
