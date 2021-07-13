import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from '../interfaces/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  baseUrl: string = 'http://localhost:3000/cards'
  allCards: Cards []=[];
  constructor(private http: HttpClient) {
   }

  
  getAllCards(){
    //return this.allProducts;
    //this.http.get - fetch
    //this.http.put - update
    //this.http.post - insert
    //this.http.delete - delete
     return this.http.get<Cards[]>(this.baseUrl);
  }

  getAllCardsOfUser(){
    
  }
  
  getCard(cardId: string){
    return this.http.get<Cards>(this.baseUrl+'/'+cardId)
  }

  addCard(card: Cards){
    
    this.getAllCards().subscribe((response) => {
    var cards=response;
    var newLength=cards.length+1;
    card.id = newLength;
    })
    return this.http.post<Cards>(this.baseUrl, card);
  }

  updateCard(card: Cards)
  {
    return this.http.put<Cards>(this.baseUrl+'/'+card.id, card);
  }

  deleteCard(card: Cards)
  {
    return this.http.delete<Cards>(this.baseUrl+'/'+card.id)
  }

}
