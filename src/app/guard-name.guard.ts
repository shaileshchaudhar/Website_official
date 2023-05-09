import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardNameGuard implements CanActivate {
  constructor(private router:Router,private guard:DataServiceService){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
   return true 
  }
  
}
