import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Users } from '../interfaces/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  allUsers: Users[]=[];
  submitted = false;
  resetForm: FormGroup = this.formBuilder.group({
    email: ['']
});
  constructor(private formBuilder: FormBuilder, private usersService: UsersService) { }
  get f() { return this.resetForm.controls; }
  ngOnInit() {
    this.usersService.getAllUsers().subscribe((response) => {
      console.log(response);
      this.allUsers = response;
    }, 
    (error) => {
      console.log(error);
    })
   return this.resetForm;
    }

    onSubmit() {
      this.submitted = true;

      for(var x =0;x<this.allUsers.length;x++)
      {
        if(this.allUsers[x].userEmail === this.resetForm.value.email)
          {
            alert('Email Sent!');
            return;
          }
      }
      alert('Email not found!');  }
}
