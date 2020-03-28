/*
 *  Title: app.module.ts
 *  Author: Professor Cristy Cross
 *  Modified by: April Auger
 *  Date: 3 March 2020
 *  Description: The root module for the nodebucket app.
 */

 // Required modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './shared/guards/auth.guards';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { SignInComponent } from './pages/signin/signin.component';
import { TasksComponent } from './pages/task/tasks/tasks.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule,
	MatCheckboxModule,
	MatSelectModule,
	MatIconModule,
	MatListModule,
	MatDividerModule,
	MatToolbarModule,
	MatMenuModule,
	MatCardModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavComponent } from './shared/nav/nav.component';
import { SignOutComponent } from './pages/signout/signout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
		AppComponent,
		BaseLayoutComponent,
		AuthLayoutComponent,
		HomeComponent,
		SignInComponent,
		TasksComponent,
		AboutComponent,
		NavComponent,
		SignOutComponent,
		NotFoundComponent
  ],
  imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled'}),
		FlexLayoutModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatCheckboxModule,
		MatSelectModule,
		MatIconModule,
		MatListModule,
		MatDividerModule,
		MatToolbarModule,
		MatMenuModule,
		MatCardModule,
		MatDialogModule,
		DragDropModule
	],
	providers: [AuthGuard, CookieService],
 	bootstrap: [AppComponent]
})
export class AppModule { }
