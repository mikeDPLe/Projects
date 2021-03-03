import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'shared/models/app.products';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input('product') product!:Product
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart!: ShoppingCart ;

  constructor(private cartService:ShoppingCartService) { }

 
  addToCart() {
    this.cartService.addtoCart(this.product);
  }


} 
