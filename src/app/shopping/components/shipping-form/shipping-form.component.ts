import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { Order } from 'shared/models/order';
import { OrderService } from 'shared/services/order.service';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userSubcription: Subscription;
  userId: string;

  constructor(private authService: AuthService, private router: Router, private orderService: OrderService) { }

  ngOnInit() {
    this.userSubcription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['order-success', result.key]);
  }

  ngOnDestroy() {
    this.userSubcription.unsubscribe();
  }

}
