/*
 *  Title: app.routing.ts
 *  Author: April Auger
 *  Date: 3 March 2020
 *  Description: Main file for the nodebucket app.
 */


import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
