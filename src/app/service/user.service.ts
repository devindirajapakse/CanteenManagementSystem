import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usersModel } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
  }

  async create(user: usersModel){

    return this.http.post(
      'http://localhost:3000/v1/api/user/signup',
      user,
      {
            responseType: 'text',
            observe: 'response',
      },
    );
  }

  async login(user: usersModel){

    return this.http.post(
      'http://localhost:3000/v1/api/user/signin',
      user,
      {
            responseType: 'text',
            observe: 'response',
      },
    );
  }
}
