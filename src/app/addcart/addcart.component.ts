import { Component } from '@angular/core';
import { render}from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent {
  constructor() {
    render ({
      id: "#myPaypalBtns",
      currency: "USD",
      value: "120.00",
      onApprove: (details) => {
        alert("Transaction successful!");
      }
    });
  }

}
