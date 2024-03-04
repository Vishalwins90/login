import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginPageService } from '../login-page.service';



@Injectable({
  providedIn: 'root'
})
export class ResloveGuard implements Resolve<any> {

  constructor(public userservice:LoginPageService) {

  }
  resolve() {
   return this.userservice.get()
  }




  }
