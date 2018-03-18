import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from './../shared/models/product.model';
import { CartService } from './../shared/services/cart.service';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

declare var PagSeguroLightbox: any;


/* Service */
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
    
    protected headers: Headers;
    public idCompra: string;

    constructor(
        private cartService: CartService,
        private http: Http,
        private router: Router
    ) { 
    
    }

    ngOnInit() {

        
        /* service */
        this.headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'

        });


        const cartSession = sessionStorage.getItem('cart');
        if (cartSession != null) {
            this.cartService.items = JSON.parse(cartSession);
        }

    }

    /* service */
    getDefaultRequestOptions(): RequestOptions {
        return <RequestOptions>{
            headers: this.headers
        };
    }

    efetivarCompra() {

        let body = new URLSearchParams();
        body.set('email', 'natansl@gmail.com');
        body.set('token', 'B0705C835BDF468CB104722E921A4F1F');
        body.set('currency', 'BRL');

        this.items().forEach(function (produts, i) {
            console.log('products: ', produts);
            i = i + 1;
            body.set('itemId' + i, produts.id);
            body.set('itemDescription' + i, produts.description.substring(0, 81));
            body.set('itemAmount' + i, produts.payment.value.toString() + '.00');
            body.set('itemQuantity' + i, produts.qtdItems.toString());
            body.set('itemWeight' + i, '1000');
            body.set('redirectURL' + i, 'https://cartaoaqui.herokuapp.com/');
            
        });

        this.http
            .post('https://ws.sandbox.pagseguro.uol.com.br/v2/checkout/', body.toString(), this.getDefaultRequestOptions())
            .subscribe(
                response => {
                    let vXml: string = response['_body'].substring(108, 76);
                    this.idCompra = vXml;
                    console.log('Resultado do id de compra: ', vXml, response['_body'], this.idCompra);
                    console.log('ID DAS COMPRAS', this.idCompra);
                    /* Chamando a API do pagseguro */
                    // PagSeguroLightbox(this.idCompra);
                    PagSeguroLightbox({
                        code: this.idCompra
                    }, {
                            success: function (transactionCode) {
                                console.log("success - " + transactionCode);
                                swal({
                                    type: 'success',
                                    title: 'Feito',
                                    text: 'Pagamento realizado com sucesso!',
                                    showConfirmButton: true
                                }).then((result) => {
                                    if (result.value) {
                                        // this.router.navigate(['/cartoes']);
                                        sessionStorage.removeItem('cart')
                                        window.location.href = "/cartoes";
                                    }
                                })
                                
                            },
                            abort: function () {
                                console.log("abort");
                                swal({
                                    type: 'error',
                                    title: 'Erro',
                                    text: 'Não foi possivel realizar o pagamento!',
                                    showConfirmButton: true
                                }).then((result) => {
                                    // if (result.value) {
                                         console.log('Error de pagamento');
                                    //     this.router.navigate(['/']);
                                        
                                    // }
                                    
                                    window.location.href = "/";
                                })
                            }
                        });

                });

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
