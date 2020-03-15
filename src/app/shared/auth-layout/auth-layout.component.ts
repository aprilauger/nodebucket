/*
 *  Title: auth-layout.component.ts
 *  Author: Professor Cross
 *  Modified By: April Auger
 *  Date: 12 March 2020
 *  Description: Auth layout component for the nodebucket application.
 */

// Required modules
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  constructor(private cookie: CookieService) { }

  ngOnInit() {
  }

}
