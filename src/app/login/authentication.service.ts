import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authLog(data){
    return this.http.post('https://bkmyapp.herokuapp.com/users/authenticate', data)
  }
}
