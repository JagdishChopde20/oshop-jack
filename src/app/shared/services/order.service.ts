import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order) {
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() { 
    return this.db.list('/orders').snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))));
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', ref => ref.orderByChild('userId').equalTo(userId))
    .snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))));
  }
}
