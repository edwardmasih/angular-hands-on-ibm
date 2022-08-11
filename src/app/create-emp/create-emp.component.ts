import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from './create-emp.service';
import { Employee } from './employee';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.scss'],
})
export class CreateEmpComponent implements OnInit {
  employees: Employee[] = [];

  // @ViewChild('traineeID', { static: true }) traineeID!: ElementRef;

  constructor(private empService: EmployeeService) {}

  async ngOnInit() {
    await this.empService.getAll().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log(this.employees);
    });
  }

  traineeForm = new FormGroup({
    name: new FormControl(),
    degree: new FormControl(),
  });

  async addTrainee(trainee: any) {
    console.log(trainee.value);
    let newTrainee = { id: this.employees.length, ...trainee.value };
    console.log(newTrainee);
    await this.empService.createEmployee(newTrainee).subscribe((data: any) => {
      console.log(data);
      this.ngOnInit();
      this.traineeForm.controls.name.setValue('');
      this.traineeForm.controls.degree.setValue('');
    });
  }
}
