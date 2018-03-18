import {
    Http, Response,
    Headers, RequestOptions
} from '@angular/http'
import { Injectable } from '@angular/core';
import { Dados } from './dados.class';


/* CLASSE SERVIÇO: RESPONSÁVEL POR ESTABELECER COMUNICAÇÃO COM O SERVIDOR */

@Injectable()
export class PagamentoService {
    constructor(private http: Http) { }


    public startSession() {
        debugger
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('https://ws.sandbox.pagseguro.uol.com.br/v2/sessions?email=natansl@gmail.com&token=B0705C835BDF468CB104722E921A4F1F', options)
            .map(res => res.json());
    }

    public store(dados: Dados) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let body = JSON.stringify({ dados });
        return this.http.post('http://www.suaApi.com.br/store', body, options)
            .map(res => res.json());
    }

    public cancel() {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('http://www.suaApi.com.br/cancel', options)
            .map(res => res.json());
    }


}