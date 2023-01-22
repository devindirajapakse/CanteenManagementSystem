import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { orderModel } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { 

  }

  async create(order: orderModel){

    return this.http.post(
      'http://localhost:3000/v1/api/order/add',
      order,
      {
            responseType: 'text',
            observe: 'response',
      },
    );
  }

  async order(order: orderModel){

    return this.http.post(
      'http://localhost:3000/v1/api/order/all',
      order,
      {
            responseType: 'text',
            observe: 'response',
      },
    );
  }


}
