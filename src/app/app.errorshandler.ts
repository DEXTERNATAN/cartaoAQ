import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

export class ErrorHandler {
  static handleError(errorResponse: Response | any) {
    let errorMessage: string;
    if (errorResponse instanceof Response) {
      const mensageBody = errorResponse.json() || '';
      const err = mensageBody.error || JSON.stringify(mensageBody);
      errorMessage = `${errorResponse.url}: ${errorResponse.status} - ${errorResponse.statusText || ''} ${err}`;
    }else {
      errorMessage = errorResponse.message ? errorResponse.message : errorResponse.toString();
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}
