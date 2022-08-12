import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmployeeService } from './create-emp.service';
import { Employee } from './employee';
import { firstNameValidation } from './customValidator';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.scss'],
})
export class CreateEmpComponent implements OnInit {
  employees: Employee[] = [];
  employeeForm!: FormGroup;

  // @ViewChild('traineeID', { static: true }) traineeID!: ElementRef;

  constructor(private empService: EmployeeService, private fb: FormBuilder) {}

  async ngOnInit() {
    this.getData();
    this.employeeForm = this.fb.group(
      {
        first_name: ['', Validators.required],
        last_name: [''],
        email: ['', Validators.required],
        phone: ['', Validators.required],
      },
      // { validator: firstNameValidation }
      // Custom Validator !!
    );
  }

  getData = async () => {
    await this.empService.getAll().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log(this.employees);
    });
  };

  async addEmployee(emp: any) {
    console.log(emp);
    await this.empService.createEmployee(emp.value).subscribe((data: any) => {
      console.log(data);
      this.getData();
      this.employeeForm.get('first_name')?.setValue('');
      this.employeeForm.get('last_name')?.setValue('');
      this.employeeForm.get('phone')?.setValue('');
      this.employeeForm.get('email')?.setValue('');
    });
  }
}
