import { Component, OnInit } from '@angular/core';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-employee-opretions',
  templateUrl: './employee-opretions.component.html',
  styleUrls: ['./employee-opretions.component.scss']
})
export class EmployeeOpretionsComponent implements OnInit {
  emps: any;
  model: any = {};
  buttonName = 'Save';
  emp_id;
  constructor(private empService: EmpService) { }

  ngOnInit() {
    this.getEmps();
  }
  getEmps() {
    this.empService.getEmp().subscribe((res: any) => {
      console.log(res);
      this.emps = res;
    }, error => {
      console.log(error);
    })
  }
  deleteEmp(emp) {
    this.empService.deleteEmp(emp.id).subscribe(res => {
      alert('Employee Deleted');
      let index = this.emps.indexOf(emp);
      this.emps.splice(index, 1);
    }, error => {
      alert(error.message);
    })
  }
  onSubmit() {
    let data = {};
    data = this.model;
    data['profile_image'] = '';
    // this.model = this.model['profile_image']= '';
    if (this.buttonName = 'Update') {
      this.empService.updateEmp(data, this.emp_id).subscribe(res => {
        alert('Employee Update successfully');
        this.buttonName = 'Save';
        this.getEmps();
        this.model = {};
      }, error => {
        alert('Update error')
      })

    } else {
      this.empService.addEmp(data).subscribe(res => {
        alert('Employee added successfully');
        this.getEmps();
      }, error => {
        alert('Added error')
      })
    }
  }
  updateEmp(emp) {
    this.emp_id =  emp.id;
    this.buttonName = 'Update';
    this.model.name = emp.employee_name;
    this.model.age = emp.employee_age;
    this.model.salary = emp.employee_salary;
  }
}
