import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { GreengrocersService } from '../greengrocers.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  @Input('item') item: Item | null = null;

  constructor(private readonly service: GreengrocersService) { }

  addOne() {
    if (!this.item) {
      throw new Error('cannot add null to cart');
    }
    this.item.quantity++;

  }

  removeOne() {
    if (!this.item) {
      throw new Error('cannot remove null from cart');
    }
    this.item.quantity--;
    if (this.item.quantity < 1) {
      this.service.removeItemFromCart(this.item)
    }
  }

}