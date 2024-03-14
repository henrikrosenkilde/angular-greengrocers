import { Injectable, inject } from '@angular/core';
import { Item } from '../models/item';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreengrocersService {
  private apiAddress = environment.apiUrl;
  http = inject(HttpClient);

  get inventory(): Promise<Item[]> {
    return firstValueFrom(this.http.get<Item[]>(this.apiAddress))
      .then(items =>
        items.map(item => ({ ...item, quantity: 0 }))
      );
  }

  private cart: Item[] = [];

  private total: number = 0;

  getTotal(): number {
    let total = 0;
    this.cart.forEach(item => total += (item.price * item.quantity))
    return total;
  }

  getCartItems(): Item[] {
    return this.cart;
  }

  getCartItemById(id: string): Item | undefined {
    return this.cart.find(item => item.id === id);
  }

  addItemToCart(item: Item): void {
    this.cart.push(item);
  }

  removeItemFromCart(item: Item): void {
    const index = this.cart.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  updateCartItem(item: Item): boolean {
    const index = this.cart.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.cart[index] = item;
      return true;
    }
    return false;
  }
}