import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddressesService } from 'src/app/services/addresses.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  submitted = false;
  inputAddress: FormGroup = this.formBuilder.group({
    name:[''],
    address: ['']
});
  constructor(private authenticationService: AuthenticationService,private formBuilder: FormBuilder, private addressesService: AddressesService) { }
  get f() { 
    return this.inputAddress.controls; 
  }
  ngOnInit() {
   return this.inputAddress;
    }

    onSubmit() {
      this.submitted = true;

      if (this.inputAddress.invalid) {
        return;
    }
    this.addAddress();
      // display form values on success
      alert('SUCCESS!! \n\n' + JSON.stringify(this.inputAddress.value, null, 4));
  }
  addAddress(){
    
    let address = {
      id: 0,
      email:this.authenticationService.userValue.userEmail,
      name: this.inputAddress.value.name,
      address: this.inputAddress.value.address
    }

    this.addressesService.addAddress(address).subscribe((response) => {
    })
}
}
