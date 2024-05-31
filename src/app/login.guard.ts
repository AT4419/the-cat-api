import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router , RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let email = localStorage.getItem('email');
    let pass = localStorage.getItem('pass');
    console.log('โหล ๆ')
    if(email && pass) {
      return true;
    }
    else {
      this.router.navigate(['/app-home']);
      return false;   
    }
  }
  
}
