import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../interfaces/users';
import { UsersService } from '../services/users.service';
import { ConfirmEqualValidator } from '../_helpers/confirm-equal-validator.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  allUsers: Users[]=[];
  submitted = false;
  registerForm: FormGroup = this.formBuilder.group({
    name:['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
}, {
  validator: ConfirmEqualValidator.MatchPassword
});
  constructor(private formBuilder: FormBuilder,
    private usersService: UsersService,
              private router: Router) { }
  get f() { 
    return this.registerForm.controls; 
  }
  ngOnInit() {
   return this.registerForm;
    }
    
    onSubmit() {
      this.submitted = true;

      if (this.registerForm.invalid) {
        return;
    }
      this.addUser();
      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      }

      addUser(){
    
        let user = {
          id: 0,
          name: this.registerForm.value.name,
          userPassword: this.registerForm.value.password,
          userEmail: this.registerForm.value.email,
          phoneNumber: "",
          profession: "",
          interests:[],
        }
    
        this.usersService.addUser(user).subscribe((response) => {
        })

    }
  }
  

