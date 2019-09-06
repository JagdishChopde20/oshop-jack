import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { slideCartItems } from 'src/app/animations';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
  animations: [ slideCartItems ]
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
