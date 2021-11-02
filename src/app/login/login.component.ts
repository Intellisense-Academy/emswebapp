import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  alertMessage: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
      this.alertMessage = "";
  }

  login() {
      if (this.username === '' || this.password === '') {
          this.alertMessage = "Username/Password cannot be empty";
      } else {
          this.loginService.login(this.username, this.password)
              .subscribe((data: any) => {
                  this.alertMessage = "";
                  this.router.navigateByUrl('student');
              }, (error: any) => {
                  this.alertMessage = "Username/Password is incorrect";
              }
          );
      }
  }
}
