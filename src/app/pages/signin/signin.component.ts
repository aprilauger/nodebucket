/*
 *  Title: signin.component.ts
 *  Author: April Auger
 *  Date: 12 March 2020
 *  Description: Signin component for the nodebucket application.
 */

// Required modules
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

	constructor(private router: Router, private cookieService: CookieService, private http: HttpClient) { }

	ngOnInit() {
		this.formModel = new FormGroup({
			employeeId: new FormControl('', Validators.pattern(/^\d/))
		});
	}

	// Login function to sign in a user
	login() {
		const employeeId = this.formModel.value.employeeId;

		this.http.get(`/api/employees/${employeeId}`).subscribe(res => {
			if(res) {
				this.cookieService.set('session_user', employeeId, 2);
				console.log(this.cookieService.check('session_user'))
				this.router.navigate(['/']);
			} else {
				this.msg = "The ID you entered is incorrect, please try again."
			}
		})
	}

}
