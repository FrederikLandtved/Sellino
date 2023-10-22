import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://localhost:7240';

  constructor(private http: HttpClient, private router: Router) { }

  authenticate(email: string, password: string) {
    let loginModel: LoginModel = {email: email, password: password};

    this.http.post<LoginModel>(this.apiUrl + '/Auth/Login', loginModel).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.router.navigate(["/"]);
    }, err => {

    })
  }
}

interface LoginModel {
  email: string,
  password: string
}