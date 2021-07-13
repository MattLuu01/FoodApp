import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addresses } from 'src/app/interfaces/addresses';
import { AddressesService } from 'src/app/services/addresses.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-addresslist',
  templateUrl: './addresslist.component.html',
  styleUrls: ['./addresslist.component.css']
})
export class AddresslistComponent implements OnInit {
  allAddresses:Addresses[] =[];
  allAddressesOfUser:Addresses[] =[]
  email!:any;
  constructor(private addressesService: AddressesService,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.addressesService.getAllAddresses().subscribe((response) => {
      console.log(response);
      this.allAddresses =response;
      this.getAddressesOfUser();

    }, 
    (error) => {
      console.log(error);
    })
  }
  getAddressesOfUser(){
    this.email = this.authenticationService.userValue.userEmail;
  
    for(var x =0;x<this.allAddresses.length;x++)
    {
      if(this.allAddresses[x].email == this.email)
        {
          this.allAddressesOfUser.push(this.allAddresses[x]);
        }
      
      
          // this.loggedIn.emit(true);
          // this.router.navigate(['/feed',this.allUsers[x].id]);
          
          //return;
    }
  }

  deleteAddress(address : Addresses)
  {
    this.addressesService.deleteAddress(address).subscribe((response) => {
      console.log(response);
      this.router.navigate(['addresslist']);
  })
  }

}
