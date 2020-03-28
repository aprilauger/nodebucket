/*
 * Title:  Employee Service
 * Author: April Auger
 * Date:   9 March 2020
 * Description: The employee schema and model.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemModel } from '../models/item.model';
import { ItemListModel } from '../models/item-list.model';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

	constructor(private http: HttpClient) {}

	/*
	 *  findEmployeeById()
	 *  Params: empId
	 *  Returns: Observable<EmployeeModel>
	 *  Description: Returns an employee.
	 */
	public findEmployeeById(empId: string): Observable<EmployeeModel> {
		console.log(this.http.get<EmployeeModel>(`/api/employees/${empId}`));
		return this.http.get<EmployeeModel>(`/api/employees/${empId}`);
	}

	/*
	 *  findAllTasks()
	 *  Params: empId
	 *  Response: Observable<ItemListModel>
	 *  Description: Returns all tasks for a single employee.
	 */
	public findAllTasks(empId: string): Observable<ItemListModel> {
		return this.http.get<ItemListModel>(`/api/employees/${empId}/tasks`);
	}

	/*
	 *  createTask()
	 *  Params: empId, taskId
	 *  Response: Observable<ItemListModel>
	 *  Description: Creates a task.
	 */
	public createTask(empId: string, text: string): Observable<ItemListModel> {
		return this.http.post<ItemListModel>(`/api/employees/${empId}/tasks/`, {text});
	}

	/*
	 *  deleteTask()
	 *  Params: empId
	 *  Response: Observable<ItemListModel>
	 *  Description: Deletes a task.
	 */
	public deleteTask(empId: string, taskId: string): Observable<ItemListModel> {
		return this.http.delete<ItemListModel>(`/api/employees/${empId}/tasks/${taskId}`);
	}

}
