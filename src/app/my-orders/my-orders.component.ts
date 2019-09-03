import { AuthService } from './../auth.service';
import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';
import { map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;
  userId: string;

  constructor(
    private authService: AuthService,
    private orderService: OrderService) {

    //this.authService.user$.subscribe(user => this.userId = user.displayName);

    authService.user$.subscribe(u => {
      this.userId = u.uid;
      this.orders$ = orderService.getOrdersByUser(this.userId);
    });



  }
}
