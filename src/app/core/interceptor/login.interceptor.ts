import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('>>>>>>>>>>>>>>>',request);
    
    let currentUser:any = (localStorage.getItem('token'));
    // let currentUser = JSON.parse(localStorage.getItem('token'));
    console.log(currentUser)
        if (currentUser) {
            request = request.clone({
                setHeaders: { 
                  Authorization: `Bearer ${currentUser}`
                }
            });
        }
        
        return next.handle(request);
      }
  
}

