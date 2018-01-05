import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from './../shared/models/product.model';
import { CartService } from './../shared/services/cart.service';

import swal from 'sweetalert2';
import { default as NProgress } from 'nprogress';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
    let product = new Product();
    // Apenas para teste pode ser removido
    product.id = '171';
    product.name = 'Mega Cartao o melhor de todos';
    product.previsaoEntrega = new Date();
    product.cep = '72225-270';
    product.description = ' 90 x 50 mm, Frente e Verso, 4x4 (colorido), Couché Fosco 300g, Refile, Laminação Fosca, Sem Extras';
    product.images = [
      'assets/images/home/sprite-cart.fw.png',
    ];
    product.qtdItems = 12;
    product.payment = {
      value: 20.9,
      qtdInstallment: 10,
      valueInstallment: 134.11
    };

    this.cartService.addItem(product);
    product = new Product();
    product.id = '172';
    product.name = 'Mega Cartao o melhor de todos';
    product.previsaoEntrega = new Date();
    product.cep = '72225-270';
    product.description = ' 90 x 50 mm, Frente e Verso, 4x4 (colorido), Couché Fosco 300g, Refile, Laminação Fosca, Sem Extras';
    product.images = [
      'assets/images/home/sprite-cart.fw.png',
    ];
    product.qtdItems = 12;
    product.payment = {
      value: 139.9,
      qtdInstallment: 10,
      valueInstallment: 134.11
    };
    this.cartService.addItem(product);

    // Final do teste
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
        NProgress.start();
        swal(
          'Excluido', 'Item removido do carrinho', 'success'
        );
        c.removeItem(produto);
        NProgress.done();
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

