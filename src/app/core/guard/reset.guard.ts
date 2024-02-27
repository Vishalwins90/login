import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  return true;
};

@Injectable({
  providedIn: 'root' 
})
export class resetguard implements CanActivate {

  constructor(private router: Router) {
 
   }
   
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree   {
    debugger
    let token=localStorage.getItem('token')
  if(token){
     this.router.navigate(['reset'])
    return false
  }
  
else{
  return true
}

   
}
}