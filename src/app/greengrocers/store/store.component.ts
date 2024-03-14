import { Component } from '@angular/core';
import { GreengrocersService } from '../greengrocers.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
})
export class StoreComponent {
  constructor(private readonly service: GreengrocersService) { }

  inventory: Promise<Item[]> = this.service.inventory;
  filteredInventory: Promise<Item[]> = this.inventory;

  async filterByType(type: string) {
    const items = await this.inventory;
    this.filteredInventory = Promise.resolve(items.filter(item => type === "all" || item.type === type));
  }

  async sortByPrice() {
    const items = await this.inventory;
    this.filteredInventory = Promise.resolve(items.sort((a, b) => a.price - b.price));
  }

  async sortByName() {
    const items = await this.inventory;
    this.filteredInventory = Promise.resolve(items.sort((a, b) => a.name.localeCompare(b.name)));
  }
}