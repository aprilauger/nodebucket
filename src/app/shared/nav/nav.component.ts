/*
 *  Title: nav.component.ts
 *  Author: April Auger
 *  Date: 12 March 2020
 *  Description: Navigation component for the nodebucket application.
 */

 // Required modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	// Properties
	loggedIn = this.cookieService.get('session_user')

	constructor(private router: Router, private cookieService: CookieService) { }

	ngOnInit() {
	}

	// Logout function removes the session_user cookie
	logout() {
		if (this.loggedIn) {
			this.cookieService.delete('session_user');
				console.log(this.cookieService.check('session_user'))
		}
	}
}
