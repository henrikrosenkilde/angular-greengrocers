import { Component } from '@angular/core';
import { GreengrocersService } from '../greengrocers.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
})
export class TotalComponent {
  constructor(private readonly service: GreengrocersService) { }

  get total(): number {
    return this.service.getTotal();
  }


}