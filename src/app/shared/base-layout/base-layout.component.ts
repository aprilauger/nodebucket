/*
 *  Title: base-layout.component.ts
 *  Author: Professor Cross
 *  Modified By: April Auger
 *  Date: 12 March 2020
 *  Description: Base layout component for the nodebucket application.
 */

 // Required modules
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  year: number = Date.now();

  constructor() {

  }

  ngOnInit() {
  }

}
