import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  year: number = Date.now();
	links = [
		{ title: 'Home', URL: '/' },
		{ title: 'Tasks', URL: '/tasks' },
		{ title: 'Employees', URL: '/employees' }
	];
  constructor() {

  }

  ngOnInit() {
  }

}
