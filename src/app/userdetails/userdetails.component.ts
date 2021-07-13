import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../interfaces/users';
import { AuthenticationService } from '../services/authentication.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userId: any;
  user!: Users;
  password!:String;
  email!:String;
  allUsers: Users[]=[];
  userInterests: []=[];
  parsedUser!:Users;
  loggedIn= false;
  constructor(private authenticationService: AuthenticationService,private route:ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((response) => {
      console.log(response);
      this.allUsers = response;
      this.getUserDetails();
      this.userInterests=this.user.interests
    }, 
    (error) => {
      console.log(error);
    })
  }

    getUserDetails(){
      this.email = this.authenticationService.userValue.userEmail;
      this.password = this.authenticationService.userValue.userPassword;
      for(var x =0;x<this.allUsers.length;x++)
      {
        if(this.allUsers[x].userEmail == this.email &&
          this.allUsers[x].userPassword == this.password
          )
          {
            this.user = this.allUsers[x];
            console.log(this.user);
          }
        
        
            // this.loggedIn.emit(true);
            // this.router.navigate(['/feed',this.allUsers[x].id]);
            
      }
    }
    
    }
  

//   getUser(){
//     this.userId = this.route.snapshot.paramMap.get('id');
//     this.usersService.getUser(this.userId).subscribe((response) => {
//       this.user=response;
//     })
//   // }
//   // getName()
//   // {
//   //   var loggedInUser =localStorage.getItem('currentUser');
//   //   this.parsedUser = JSON.parse(loggedInUser!);
//   //   return this.parsedUser;
//   // }

// }
// }

  