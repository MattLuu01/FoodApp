import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Addresses } from '../interfaces/addresses';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  baseUrl: string = 'http://localhost:3000/addresses'
  allAddresses: Addresses []=[];
  constructor(private http: HttpClient) {
   }

  
  getAllAddresses(){
    //return this.allProducts;
    //this.http.get - fetch
    //this.http.put - update
    //this.http.post - insert
    //this.http.delete - delete
     return this.http.get<Addresses[]>(this.baseUrl);
  }

  getAllAddressesOfUser(){
    
  }
  
  getAddress(addressId: string){
    return this.http.get<Addresses>(this.baseUrl+'/'+addressId)
  }

  addAddress(address: Addresses){
    
    this.getAllAddresses().subscribe((response) => {
    var addresses=response;
    var newLength=addresses.length+1;
    address.id = newLength;
    })
    return this.http.post<Addresses>(this.baseUrl, address);
  }

  updateAddress(address: Addresses)
  {
    return this.http.put<Addresses>(this.baseUrl+'/'+address.id, address);
  }

  deleteAddress(address: Addresses)
  {
    return this.http.delete<Addresses>(this.baseUrl+'/'+address.id)
  }



  
}
