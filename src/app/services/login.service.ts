import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL: string = "http://localhost:8080/login";

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
      const headers = {
          'Content-type': 'application/json'
      };
      const body = {
          "username" : username,
          "password" : password
      };

      this.http.post<any>(this.URL, body, {
          headers,
          observe: "response"
      }).subscribe((data: any) => {
          this.router.navigateByUrl('home');
      }, (error: any) => {
          console.log("Incorrect credentials");
      })
  }
}
