import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { foodsModel } from '../models/foods';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) {

  }

  async create(food: foodsModel){

    return this.http.post(
      'http://localhost:3000/v1/api/food/add',
      food,
      {
            responseType: 'text',
            observe: 'response',
      },
    );
  }

  async food(food: foodsModel){

    return this.http.post(
      'http://localhost:3000/v1/api/food/all',
      food,
      {
            responseType: 'text',
            observe: 'response',
      },
    );
  }
}
