import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../interfaces/users';
import { AuthenticationService } from '../services/authentication.service';
import { LocalStorageService } from '../services/localstorage.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allUsers: Users[]=[];
  submitted = false;
  @Output() 
  loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  loginForm: FormGroup = this.formBuilder.group({
    email: [''],
    password: ['']
});
  constructor(private formBuilder: FormBuilder,
     private router: Router,
      private activatedRoute:ActivatedRoute,
    private usersService: UsersService,
    private authenticationService: AuthenticationService,
    private localstorageService: LocalStorageService
    ) { }

  get f() { return this.loginForm.controls; }
  ngOnInit() {
    this.usersService.getAllUsers().subscribe((response) => {
      console.log(response);
      this.allUsers = response;
    }, 
    (error) => {
      console.log(error);
    })
   return this.loginForm;
   
    }

    onSubmit() {
      this.submitted = true;
      console.log(this.allUsers);

    //   if (this.loginForm.invalid) {
    //     return;
    // }
    
    for(var x =0;x<this.allUsers.length;x++)
    {
      if(this.allUsers[x].userEmail === this.loginForm.value.email
        && this.allUsers[x].userPassword === this.loginForm.value.password)
        {
          this.authenticationService
        .login(this.allUsers[x].userEmail, this.allUsers[x].userPassword)
        // .pipe(first())
        .subscribe(
        data => {
          this.router.navigate(['/feed',this.allUsers[x].id]);
        }
      );
          // this.loggedIn.emit(true);
          // this.router.navigate(['/feed',this.allUsers[x].id]);
          
          return;
        }
    }
    alert('Wrong username or password!');
  }
  

}
