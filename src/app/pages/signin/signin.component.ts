/*
 *  Title: signin.component.ts
 *  Author: April Auger
 *  Date: 12 March 2020
 *  Description: Signin component for the nodebucket application.
 */

// Required modules
import { Component, OnInit, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth.service'


@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
	// Properties
	msg: string;

	// Create a form model
	formModel: FormGroup;

	constructor(private router: Router, private cookieService: CookieService, private http: HttpClient, private authService: AuthService) { }

	ngOnInit() {
		this.formModel = new FormGroup({
			employeeId: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\d/)]))
		});
	}

	/*
	 *  signIn()
	 *  Params: none
	 *  Description: Signs in a user by setting a cookie.
	 */
	private signIn() {
		let signInCheck: boolean;
		signInCheck = this.authService.signInCheck();

		const employeeId = this.formModel.value.employeeId;

		if(signInCheck == false) {
			this.http.get(`/api/employees/${employeeId}`).subscribe((response: any) => {

				if(response) {
					this.cookieService.set('session_user', employeeId);
					this.cookieService.set('session_first_name', response.firstName);
					this.router.navigate(['/']);
				} else {
					this.msg = 'The employee ID was not found.'
				}
			})
		} else {
			this.router.navigate(['/session/tasks']);
		}
	}
}
