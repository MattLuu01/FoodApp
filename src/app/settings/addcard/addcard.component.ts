import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {
  submitted = false;
  inputCard: FormGroup = this.formBuilder.group({
    name:[''],
    company: [''],
    cardNumber:['']
});
  constructor(private authenticationService: AuthenticationService,private formBuilder: FormBuilder, private cardsService: CardsService) { }
  get f() { 
    return this.inputCard.controls; 
  }
  ngOnInit() {
   return this.inputCard;
    }

    onSubmit() {
      this.submitted = true;

      if (this.inputCard.invalid) {
        return;
    }
    this.addCard();
      // display form values on success
      alert('SUCCESS!! \n\n' + JSON.stringify(this.inputCard.value, null, 4));
      
  }
  addCard(){
    
    let card = {
      id: 0,
      email:this.authenticationService.userValue.userEmail,
      name: this.inputCard.value.name,
      company: this.inputCard.value.company,
      cardNumber: this.inputCard.value.cardNumber
    }

    this.cardsService.addCard(card).subscribe((response) => {
    })
}

}
