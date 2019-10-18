import { Component, OnInit } from '@angular/core';
import { CartService } from './shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  UserCart:any;
  SubTotal:number;
  TaxApplicable:number;
  BillableAmount:number;
  constructor(private getCart: CartService) { 
    this.SubTotal=0;
    this.TaxApplicable=0;
    this.BillableAmount=0;
  }

  ngOnInit() {
    this.UserCart = this.getCart.getUserCart()
    for (var index = 0; index < this.UserCart.length; index++) {
        this.SubTotal += this.UserCart[index].TotalPrice
      }
    this.TaxApplicable = this.SubTotal/10;
    this.BillableAmount=this.SubTotal+this.TaxApplicable;
  }

}
