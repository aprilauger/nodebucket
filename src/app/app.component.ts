/*
 *  Title: app.component.ts
 *  Author: Professor Cristy Cross
 *  Modified by: April Auger
 *  Date: 3 March 2020
 *  Description: The root component for the nodebucket app.
 */

// Required modules
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [``]
})
export class AppComponent {
  title = 'nodebucket';
}
