import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { usersModel } from '../models/users';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [usersModel]
})
export class LoginComponent implements OnInit{

  constructor(
    private user: usersModel,
    private service: UserService,
    private router : Router,
    ){ }

  ngOnInit(): void {
    
  }

  async login(form:NgForm){
    if(form.value.email != '' && form.value.password != '' ){
      this.user.email = form.value.email;
      this.user.password = form.value.password;

      (await this.service.login(this.user)).subscribe((response) => {

        if (response.status == 200) {
          this.router.navigate(['/customerhome']);
          return;
        }
  
      });
    }
  }
}
