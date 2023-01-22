import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { usersModel } from '../models/users';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [usersModel]
})
export class SignupComponent implements OnInit{

  constructor(
    private user: usersModel,
    private service: UserService,
    private router : Router,
    ){ }

  ngOnInit(): void {
    
  }

  async signup(form: NgForm){
    if(form.value.name != '' && form.value.email != '' && form.value.mobile != '' && form.value.password != '' && form.value.password == form.value.cpassword ){
      this.user.name = form.value.name;
      this.user.email = form.value.email;
      this.user.mobileNumber = form.value.mobile;
      this.user.password = form.value.password;

      (await this.service.create(this.user)).subscribe((response) => {

        if (response.status == 200) {
          this.router.navigate(['/customerhome']);
          return;
        }
  
      });
    }
  }
}
