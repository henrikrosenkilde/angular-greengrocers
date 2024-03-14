import { Component } from '@angular/core';
import { GreengrocersService } from '../greengrocers.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  constructor(private readonly service: GreengrocersService) { }

  cart = this.service.getCartItems()

}