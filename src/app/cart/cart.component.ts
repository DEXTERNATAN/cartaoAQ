import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from './../shared/models/product.model';
import { CartService } from './../shared/services/cart.service';

import swal from 'sweetalert2';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
    const cartSession = sessionStorage.getItem('cart');
    if (cartSession != null) {
      this.cartService.items = JSON.parse(cartSession);
    }
  }

  items(): Product[] {
    return this.cartService.items;
  }

  removeItem(produto: Product) {
    let c: any;
    c = this.cartService;
    swal({
      title: 'Confirmacao',
      text: 'Voce tem certeza que deseja remover este item das suas intencoes de compra?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, quero remover!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        swal(
          'Excluido', 'Item removido do carrinho', 'success'
        );
        c.removeItem(produto);
      } else if (result.dismiss === 'cancel') {
        swal(
          'Cancelada',
          'A operacao foi cancelada com sucesso!',
          'error'
        );
      }
    });
  }

  total(): number {
    return this.cartService.total();
  }

  installments() {
    return this.cartService.installment();
  }

}
