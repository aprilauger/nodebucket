/*
 *  Title: auth.guards.ts
 *  Author: Professor Krasso
 *  Modified by: April Auger
 *  Date: 12 March 2020
 *  Description: Route Guards for the nodebucket application.
 */

// Required modules
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private cookieService: CookieService) {}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		console.log('AuthGuard is activated!');
		// Get user's session cookie
		const sessionUser = this.cookieService.get('session_user');

		// If the user is authenticated return true.
		if(sessionUser) {
			return true;
		}
		// User is not authenticated and needs to be redirected to the signin page.
		else {
			this.router.navigate(['session/signin']);
			return false;
		}
	}
}