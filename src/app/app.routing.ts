/*
 *  Title: app.routing.ts
 *  Author: Professor Cristy Cross
 *  Modified by: April Auger
 *  Date: 3 March 2020
 *  Description: Routing for the nodebucket app.
 */

 // Required modules
import {Routes} from '@angular/router';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/signin/signin.component';
import { TasksComponent } from './pages/task/tasks/tasks.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guards';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignOutComponent } from './pages/signout/signout.component';

// Application routes
export const AppRoutes: Routes = [
	{
		path: '',
		component: BaseLayoutComponent,
		children: [
			{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
			{ path: 'about', component: AboutComponent },
		]
	},
	{
		path: 'session',
		component: AuthLayoutComponent,
		children: [
			{ path: 'signin', component: SignInComponent },
			{ path: 'signout', component: SignOutComponent, canActivate: [AuthGuard] },
			{ path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
		],
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];
