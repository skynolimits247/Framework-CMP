import { CartService } from './../../../cart/shared/cart.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  item:number;
  constructor(private UserCart : CartService) { }

  ngOnInit() {
    this.item = this.UserCart.getUserCart().length
  }

}
