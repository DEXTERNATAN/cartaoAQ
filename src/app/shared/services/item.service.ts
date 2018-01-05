import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from '../models/product.model';
import { ErrorHandler } from '../../app.errorshandler';

@Injectable()
export class ItemsService {

    constructor(private http: Http) { }

    products(): Observable<Product[]> {
        return this.http.get('http://localhost:3000/items')
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

}