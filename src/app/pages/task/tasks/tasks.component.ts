import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
	form: FormGroup;

	constructor(
		private dialogRef: MatDialogRef<TasksComponent>,
		private formBuilder: FormBuilder,
	) { }

	ngOnInit() {
		this.form = this.formBuilder.group({
			text: [null, Validators.compose([Validators.required, Validators.minLength(3)])]
		})
	}

	/*
	 *  Submit()
	 *  Params: none
	 *  Description: Creates a new task.
	 */
	submit() {
		this.dialogRef.close(this.form.value);
	}

	/*
	 *  Submit()
	 *  Params: none
	 *  Description: Closes the dialog box.
	 */
	close() {
		this.dialogRef.close();
	}

}
