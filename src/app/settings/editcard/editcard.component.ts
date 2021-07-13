import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressesService } from 'src/app/services/addresses.service';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-editcard',
  templateUrl: './editcard.component.html',
  styleUrls: ['./editcard.component.css']
})
export class EditcardComponent implements OnInit {
  submitted = false;
  editCard!: FormGroup;
  name!: any;
  company!:any;
  cardNumber!:any;
  cardId!:any;

  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private cardsService: CardsService,
    private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.editCard = new FormGroup({
      id: new FormControl(),
      email:new FormControl(),
      name: new FormControl(),
      company: new FormControl(),
      cardNumber: new FormControl(),
    });

    this.cardId = this.activatedRoute.snapshot.paramMap.get('id');
    this.cardsService.getCard(this.cardId).subscribe((response) => {
      console.log(response);
      this.editCard.setValue(response); // sets the response to 
                                        // the form group in the template
    })
    console.log(this.cardId);

}

updateCard(){
    
  console.log(this.editCard.value);
  let card = this.editCard.value; // no changes here for updating 
                                    // check the product service class

  this.cardsService.updateCard(card).subscribe((response) => {
      console.log(response);
      this.router.navigate(['carddetails']);
  })

}
}
