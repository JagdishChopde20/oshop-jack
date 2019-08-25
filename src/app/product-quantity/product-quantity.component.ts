import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;

  constructor(private cartService: ShoppingCartService) { 
    console.log('Product: ' + this.product);
    console.log('shoppingCart: ' + this.shoppingCart);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    console.log('Product: ' + this.product);
    console.log('shoppingCart: ' + this.shoppingCart);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

}
