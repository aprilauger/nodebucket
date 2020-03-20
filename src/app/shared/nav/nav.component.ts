/*
 *  Title: nav.component.ts
 *  Author: April Auger
 *  Date: 12 March 2020
 *  Description: Navigation component for the nodebucket application.
 */

 // Required modules
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	constructor(private authService: AuthService, private cookieService: CookieService) { }

	ngOnInit() {
	}

	// Properties
	signedIn: string = this.cookieService.get('session_user');
	firstName: string = this.cookieService.get('session_first_name');

	public signOut() {
		this.authService.signOut();
	}
}
