/*
 *  Title: app.routing.ts
 *  Author: Professor Cristy Cross
 *  Modified by: April Auger
 *  Date: 3 March 2020
 *  Description: Routing for the nodebucket app.
 */

 // Required modules
import {Routes} from '@angular/router';
import {BaseLayoutComponent} from './shared/base-layout/base-layout.component';
import {HomeComponent} from './pages/home/home.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { SignInComponent } from './pages/signin/signin.component';
import { TasksComponent } from './pages/task/tasks/tasks.component';
import { AddEmployeeComponent } from './pages/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './pages/employee/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './pages/employee/delete-employee/delete-employee.component';
import { AddTaskComponent } from './pages/task/add-task/add-task.component';
import { EditTaskComponent } from './pages/task/edit-task/edit-task.component';
import { DeleteTaskComponent } from './pages/task/delete-task/delete-task.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guards';
import { AboutComponent } from './pages/about/about.component';
import { SignOutComponent } from './pages/signout/signout.component';

// Application routes
export const AppRoutes: Routes = [
	{
		path: '',
		component: BaseLayoutComponent,
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'about', component: AboutComponent }
		]
	},
	{
		path: 'session',
		component: AuthLayoutComponent,
		children: [
			{ path: 'signin', component: SignInComponent },
			{ path: 'signout', component: SignOutComponent },
			{ path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard] },
			{ path: 'add-employee', component: AddEmployeeComponent, canActivate: [AuthGuard] },
			{ path: 'edit-employee', component: EditEmployeeComponent, canActivate: [AuthGuard] },
			{ path: 'delete-employee', component: DeleteEmployeeComponent, canActivate: [AuthGuard] },
			{ path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
			{ path: 'add-task', component: AddTaskComponent, canActivate: [AuthGuard] },
			{ path: 'edit-task', component: EditTaskComponent, canActivate: [AuthGuard] },
			{ path: 'delete-task', component: DeleteTaskComponent, canActivate: [AuthGuard] }
		]
	}
];
