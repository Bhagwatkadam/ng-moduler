import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  myName: string = 'Bhagwat';
  constructor( private authenticationService :AuthenticationService ,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.authenticationService.authLog(this.model).subscribe( (res: any) =>{
      localStorage.setItem('user', res.username);
    this.router.navigate(['home']);
    }, error =>{
      alert('Login Error');
    })
  }

}
