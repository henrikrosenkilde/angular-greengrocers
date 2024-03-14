import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { GreengrocersService } from '../greengrocers.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
})
export class StoreItemComponent {
  @Input('item') item: Item | null = null;

  constructor(private readonly service: GreengrocersService) { }

  addToCart() {
    if (!this.item) {
      throw new Error('cannot add null to cart');
    }
    if (this.service.getCartItemById(this.item.id)) {
      this.item.quantity++;
      this.service.updateCartItem(this.item);
    }
    else {
      this.item.quantity = 1;
      this.service.addItemToCart(this.item);
    }
  }
}