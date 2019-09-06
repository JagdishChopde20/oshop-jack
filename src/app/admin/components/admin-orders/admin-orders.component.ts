import { Component } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { slideCartItems } from 'src/app/animations';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
  animations: [ slideCartItems ]
})
export class AdminOrdersComponent {
  orders$;

  constructor(orderService: OrderService) { 
    this.orders$ = orderService.getOrders();
  }
}
