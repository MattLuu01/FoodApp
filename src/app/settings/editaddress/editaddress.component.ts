import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressesService } from 'src/app/services/addresses.service';

@Component({
  selector: 'app-editaddress',
  templateUrl: './editaddress.component.html',
  styleUrls: ['./editaddress.component.css']
})
export class EditaddressComponent implements OnInit {
  submitted = false;
  editAddress!: FormGroup;
  name!: any;
  address!:any;
  addressId!:any;

  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private addressesService: AddressesService,
    private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.editAddress = new FormGroup({
      id: new FormControl(),
      email:new FormControl(),
      name: new FormControl(),
      address: new FormControl(),
    });

    this.addressId = this.activatedRoute.snapshot.paramMap.get('id');
    this.addressesService.getAddress(this.addressId).subscribe((response) => {
      console.log(response);
      this.editAddress.setValue(response); // sets the response to 
                                        // the form group in the template
    })
    console.log(this.addressId);

//     onSubmit() {
//       this.submitted = true;

//       if (this.editAddress.invalid) {
//         return;
//     }
//     this.editAddress();
//       // display form values on success
//       alert('SUCCESS!! \n\n' + JSON.stringify(this.editAddress.value, null, 4));
//   }
//   editAddress(){
    
//     let address = {
//       addressId: "",
//       userId: "",
//       name: this.editAddress.value.name,
//       address: this.editAddress.value.address
//     }

//     this.addressesService.editAddress(address).subscribe((response) => {
//     })

}

updateAddress(){
    
  console.log(this.editAddress.value);
  let address = this.editAddress.value; // no changes here for updating 
                                    // check the product service class

  this.addressesService.updateAddress(address).subscribe((response) => {
      console.log(response);
      this.router.navigate(['addresslist']);
  })

}

}

