/*
 *  Title: app.routing.ts
 *  Author: Professor Cristy Cross
 *  Modified by: April Auger
 *  Date: 3 March 2020
 *  Description: Routing for the nodebucket app.
 */

import {Routes} from '@angular/router';
import {BaseLayoutComponent} from './shared/base-layout/base-layout.component';
import {HomeComponent} from './pages/home/home.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { TasksComponent } from './pages/task/tasks/tasks.component';
import { AddEmployeeComponent } from './pages/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './pages/employee/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './pages/employee/delete-employee/delete-employee.component';
import { AddTaskComponent } from './pages/task/add-task/add-task.component';
import { EditTaskComponent } from './pages/task/edit-task/edit-task.component';
import { DeleteTaskComponent } from './pages/task/delete-task/delete-task.component';

export const AppRoutes: Routes = [
	{
		path: '',
		component: BaseLayoutComponent,
		children: [
			{
				path: '',
				component: HomeComponent
			},
			{
				path: 'login',
				component: SignInComponent
			},
			{
				path: 'employees',
				component: EmployeeListComponent
			},
			{
				path: 'add-employee',
				component: AddEmployeeComponent
			},
			{
				path: 'edit-employee',
				component: EditEmployeeComponent
			},
			{
				path: 'delete-employee',
				component: DeleteEmployeeComponent
			},
			{
				path: 'tasks',
				component: TasksComponent
			},
			{
				path: 'add-task',
				component: AddTaskComponent
			},
			{
				path: 'edit-task',
				component: EditTaskComponent
			},
			{
				path: 'delete-task',
				component: DeleteTaskComponent
			}
		]
	}
];
