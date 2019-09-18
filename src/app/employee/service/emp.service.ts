import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  empUrl = environment.empApi;
  constructor( private http: HttpClient) { }

  getEmp(){
    return this.http.get(this.empUrl+'api/v1/employees');
  }
  deleteEmp(id){
    return this.http.delete(this.empUrl+'api/v1/delete/'+id)
  }
  addEmp(data){
    return this.http.post(this.empUrl+'api/v1/create', data)
  }
  updateEmp(data, id) {
    return this.http.put(this.empUrl+'api/v1/update/'+id, data)
  }
}
