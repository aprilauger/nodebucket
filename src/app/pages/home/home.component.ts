/*
 *  Title: home.component.ts
 *  Author: April Auger
 *  Date: 12 March 2020
 *  Description: Home component for the nodebucket application.
 */

// Required modules
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TasksComponent } from '../task/tasks/tasks.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	// Properties
	sessionUser: string;
	tasks: any;
	todo: any;
	done: any;

	constructor(
		private authService: AuthService,
		private employeeService: EmployeeService,
		private dialog: MatDialog,
		private http: HttpClient) {}

	ngOnInit() {
		this.sessionUser = this.authService.getSessionCookie();

		// Retrieve all tasks
		this.employeeService.findAllTasks(this.sessionUser).subscribe(response => {
			this.tasks = response;
			this.todo = this.tasks.todo;
			this.done = this.tasks.done;
			}, err => {
			console.log(err);
		});
	}

	/*
	 *  openCreateTaskDialog()
	 *  Params: none
	 *  Response: none
	 *  Description: Retrieves a list of tasks.
	 */
	openCreateTaskDialog() {
		const dialogRef = this.dialog.open(TasksComponent, {
			disableClose: true
		})

		dialogRef.afterClosed().subscribe(data => {
			if (data) {
				this.employeeService.createTask(this.sessionUser, data.text).subscribe(response => {
					this.tasks = response;
					this.todo = this.tasks.todo;
					this.done = this.tasks.done;
				}, err => {
					console.log(err);
				});
			}
		});
	}

	delete(taskId) {
		if (taskId) {
			this.employeeService.deleteTask(this.sessionUser, taskId).subscribe(response => {
				this.tasks = response;
				this.todo = this.tasks.todo;
				this.done = this.tasks.done;
			}, err => {
				console.log(err);
			})
		}
	}

	drop(event: CdkDragDrop<any[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
			this.updateTask(this.sessionUser, this.todo, this.done).subscribe(response => {
				this.tasks = response;
				this.todo = this.tasks.todo;
				this.done = this.tasks.done;
				console.log("TODO: " + this.tasks.todo)
				console.log("DONE: " + this.tasks.done)
			}, err => {
				console.log("Error saving update tasks");
				console.log(err);
			});
		} else {
			transferArrayItem(event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex);
			console.log("TODO: " + this.tasks.todo)
			console.log("DONE: " + this.tasks.done)
			this.updateTask(this.sessionUser, this.todo, this.done).subscribe(response => {
				this.tasks = response;
				this.todo = this.tasks.todo;
				this.done = this.tasks.done;
			}, err => {
				console.log('Error saving update tasks');
				console.log(err);
			});
		}
	}


	/*
	 *  updateTask()
	 *  Params: empId, todo, done
	 *  Response: Updated tasks
	 *  Description: Updates a task.
	 */
	public updateTask(empId: string, todo, done) {
		return this.http.put(`/api/employees/${empId}/tasks`, {
			todo: todo,
			done: done
		});
	}
}
