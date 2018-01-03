import { Product } from './../shared/models/product.model';
import { CartService } from './../shared/services/cart.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { default as sweetalert} from 'sweetalert2';
import { default as NProgress } from 'nprogress';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
    const cartSession = sessionStorage.getItem('cart');
    if ( cartSession != null) {
      this.cartService.items = JSON.parse(cartSession);
    }
  }

  items(): Product[] {
    return this.cartService.items;
  }

  removeItem(produto: Product) {
    const c = this.cartService;
    sweetalert({
      title: 'Confirmacao',
      text: 'Voce tem certeza que deseja remover este item das suas intencoes de compra?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'blue',
      cancelButtonColor: 'yellow',
      confirmButtonText: 'Sim',
    }).then(function(){
      NProgress.start();
      sweetalert('Excluido', 'Item removido do carrinho', 'success' );
      NProgress.done();
      return c.removeItem(produto);
    }
    );
  }

  total(): number {
    return this.cartService.totalIns();
  }

  installments() {
    return this.cartService.installment();
  }

}
