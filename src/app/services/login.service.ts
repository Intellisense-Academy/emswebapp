import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL: string = "http://localhost:8080/login";

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
      const headers = {
          'Content-type': 'application/json'
      };
      const body = {
          "username" : username,
          "password" : password
      };

      return this.http.post<any>(this.URL, body, {
          headers,
          observe: "response"
      });
  }
}
