import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  public baseURL: string;
  public token: any;

  constructor() {
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
    this.token = '1e2r3t4y5ui6io7pp8j9j0';
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let newUrl = this.baseURL + request.url;
    const newRequest = request.clone({
      url: newUrl,
      headers: request.headers.set('Authorization', 'Bearer'+this.token).set('Content-Type','application/json'),
    });
    return next.handle(newRequest).pipe(
      catchError((err:HttpErrorResponse) => {
        console.log("show error page");
        return throwError(err);
      })
    )
  }
}
