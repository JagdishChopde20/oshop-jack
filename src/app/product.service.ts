import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products')
      .snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))));
  }

  get(prouductId) {
    return this.db.object('/products/' + prouductId)
    .snapshotChanges().pipe(map(c => ({ key: c.payload.key, ...c.payload.val() })));
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
