import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable} from 'rxjs';
import { LoginService } from '../login/service/login.service';
import{map} from 'rxjs/operators';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private loginSv:LoginService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    return next.handle(req);
  }
}
