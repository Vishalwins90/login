import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  return true;
};

@Injectable({
  providedIn: 'root' 
})
export class unauthguard implements CanActivate {

  constructor(private router: Router) {
    debugger
   }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree   {
    let token=localStorage.getItem('token')
  if(token){
     this.router.navigate(['home'])
    return false
  }
  
else{
  return true
}

   
}
}