import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../interfaces/users';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../services/authentication.service';
import { LocalStorageService } from '../services/localstorage.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  localStorage:Storage | undefined;
  userId: any;
  user!: Users;
  email!: any;
  //allUsers: Users[]=[];
  password!:any;
  parsedUser!:Users;
  @Input() loggedIn= false;
  constructor(public router: Router,
    private route:ActivatedRoute, 
    private usersService: UsersService,
    private localStorageService: LocalStorageService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((response) => {
      console.log(response);
      //this.allUsers = response;
      this.getUserDetails(response);
    }, 
    (error) => {
      console.log(error);
    })
  }

  getUserDetails(allUsers: Users[]){
    this.email = this.authenticationService.userValue.userEmail;
    this.password = this.authenticationService.userValue.userPassword;
    for(let x =0;x<allUsers.length;x++)
    {
      if(allUsers[x].userEmail == this.email &&
        allUsers[x].userPassword == this.password
        )
        {
          this.user = allUsers[x];
        }
      
      
          // this.loggedIn.emit(true);
          // this.router.navigate(['/feed',this.allUsers[x].id]);
          
          
    }
  }
  
  
  // getUser(){
  //   this.userId = this.route.snapshot.paramMap.get('id');
  //   this.usersService.getUser(this.userId).subscribe((response) => {
  //     this.user=response;
  //   })
  // }
  logout() {
    this.email='';
    this.password ='';
    this.authenticationService.logout();
  }



  // getProfile() {
  //   var loggedInUser =localStorage.getItem('currentUser');
  //   this.parsedUser = JSON.parse(loggedInUser!);
  //   this.router.navigate(['/userdetails']);
  //   return this.parsedUser;
  // }
  // getName()
  // {
  //   var loggedInUser =localStorage.getItem('currentUser');
  //   this.parsedUser = JSON.parse(loggedInUser!);
  //   return this.parsedUser.name;
  // }


}
