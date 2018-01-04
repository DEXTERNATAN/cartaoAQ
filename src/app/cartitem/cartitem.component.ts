import { Product } from '../shared/models/product.model';
import { CartService } from '../shared/services/cart.service';
import { ItemsService } from '../shared/services/item.service';
import { Component, OnInit } from '@angular/core';
import { default as NProgress} from 'nprogress';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {

  constructor(private itemService: ItemsService, private cartService: CartService) { }
  products: Product[];

  ngOnInit() {
    NProgress.start();
    this.itemService.products().subscribe(products => this.products = products);
    NProgress.done();
  }

  addCart(product: Product) {
    NProgress.start();
    this.cartService.addItem(product);
    NProgress.done();
  }

  total(): number {
    return this.cartService.total();
  }

  totalIns(): number {
    return this.cartService.totalIns();
  }

  installments() {
    return this.cartService.installment();
  }


}
