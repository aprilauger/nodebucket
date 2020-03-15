/*
 *  Title: about.component.ts
 *  Author: April Auger
 *  Date: 12 March 2020
 *  Description: About component for the nodebucket application.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	title: string = "About";

	constructor() { }

	ngOnInit() {
	}

}
