import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { catchError , map} from 'rxjs/operators';


@Injectable()
export class SendMailService {

  headers: Headers;
  options: RequestOptions;
  url: any;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json',
    'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
    this.url = 'http://localhost:8888/sendmail';
  }

  sendMail( param: any): Observable<any> {
    const body = JSON.stringify(param.value);
    return this.http
    .post(this.url, body, this.options).pipe(map(this.extractData),
    catchError( this.handleError)
    );
  }


  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}


