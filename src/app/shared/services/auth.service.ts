/*
 *  Title: auth-service.ts
 *  Author: April Auger
 *  Date: 19 March 2020
 *  Description: Service for controlling user authentication.
 */

// Required modules
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavComponent } from '../nav/nav.component';

@Injectable({
	providedIn: 'root',
})
export class AuthService {

	constructor(private router: Router, private cookieService: CookieService, private http: HttpClient) {}

	/*
	 *  signInCheck()
	 *  Params: none
	 *  Response: Boolean
	 *  Description: Checks if a user has a session_user cookie.
	 */
	public signInCheck(): boolean {
		if (this.cookieService.get('session_user')) {
			return true;
		} else {
			return false;
		}
	}

	/*
	 *  signOut()
	 *  Params: none
	 *  Description: Removes the session_user cookie.
	 */
	public signOut() {
		// Properties
		let signedIn: string;
		signedIn = this.cookieService.get('session_user')

		if (signedIn) {
			this.cookieService.delete('session_user');
			this.cookieService.delete('session_first_name');
			this.router.navigate(['/session/signin']);
		}
	}

}