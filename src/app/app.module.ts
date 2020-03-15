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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './shared/guards/auth.guards';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { SignInComponent } from './pages/signin/signin.component';
import { AddEmployeeComponent } from './pages/employee/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './pages/employee/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './pages/employee/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { DeleteTaskComponent } from './pages/task/delete-task/delete-task.component';
import { AddTaskComponent } from './pages/task/add-task/add-task.component';
import { EditTaskComponent } from './pages/task/edit-task/edit-task.component';
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
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavComponent } from './shared/nav/nav.component';
import { SignOutComponent } from './pages/signout/signout.component';

@NgModule({
  declarations: [
		AppComponent,
		BaseLayoutComponent,
		AuthLayoutComponent,
		HomeComponent,
		SignInComponent,
		AddEmployeeComponent,
		DeleteEmployeeComponent,
		EditEmployeeComponent,
		EmployeeListComponent,
		DeleteTaskComponent,
		AddTaskComponent,
		EditTaskComponent,
		TasksComponent,
		AboutComponent,
		NavComponent,
		SignOutComponent
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
		MatCardModule
	],
	providers: [AuthGuard, CookieService],
 	bootstrap: [AppComponent]
})
export class AppModule { }
