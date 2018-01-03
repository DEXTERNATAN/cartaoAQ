import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from '../models/product.model';
import {ErrorHandler} from '../../app.errorshandler';

@Injectable()
export class CartService {

    constructor() {}

    items: Product[] = [];

    addItem(item: Product) {
        this.items.push(item);
        sessionStorage.setItem( 'cart' , JSON.stringify(this.items));
    }

    removeItem( product: Product ) {
        this.items.splice(this.items.indexOf(product), 1);
        // save item in session
        sessionStorage.setItem('cart', JSON.stringify(this.items));
    }

    total(): number {
        return this.items
        .map(item => item.payment.value)
        .reduce((prev, value) => prev + value, 0);
    }
    totalIns(): number {
         return this.items
        .map(item => item.payment.valueStallment)
        .reduce((prev, value) => prev + value, 0);
    }
    installment(): number {
        return Math.max.apply(
            Math, this.items
            .map(function(prod){
            return prod.payment.qtdstallment;
        }));
    }
}
