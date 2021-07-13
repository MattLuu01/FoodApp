import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = 'http://localhost:3000/users'
  allUsers: Users []=[];
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
   }

  
  getAllUsers(){
    //return this.allProducts;
    //this.http.get - fetch
    //this.http.put - update
    //this.http.post - insert
    //this.http.delete - delete
     return this.http.get<Users[]>(this.baseUrl);
  }
  
  addUser(user: Users){
    
    this.getAllUsers().subscribe((response) => {
    var users=response
    var newLength=users.length+1;
    user.id = newLength;
    })
    return this.http.post<Users>(this.baseUrl, user);
  }

  
  getUser(userId: string){
    //http://localhost:3000/user/1
    return this.http.get<Users>(this.baseUrl+'/'+userId)
  }

  getUserDetails(email: string, password:string){
    var user!: Users;
    var arr: Users[]=[];
    this.getAllUsers().subscribe((response) => {
    arr=response;
    for(var x =0;x<arr.length;x++)
    {
      if(arr[x].userEmail == email &&
        arr[x].userPassword == password)
        {
          user = arr[x];
        }
          // this.loggedIn.emit(true);
          // this.router.navigate(['/feed',this.allUsers[x].id]);
          
    }
    return user;
  })
  return user;
}
}
