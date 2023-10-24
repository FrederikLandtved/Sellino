import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://localhost:7240';

  constructor(private http: HttpClient, private router: Router) { }

  authenticate(email: string, password: string) {
    let loginModel: LoginModel = {email: email, password: password};

    return this.http.post<LoginModel>(this.apiUrl + '/Auth/Login', loginModel);
  }

  register(email: string, password: string, firstName: string, lastName: string, createProfile: boolean, profileName: string = "") {
    let registerModel: RegisterModel = { email: email, password: password, firstName: firstName, lastName: lastName, createProfile: createProfile, profileName: profileName };

    this.http.post<LoginModel>(this.apiUrl + '/Auth/AddUser', registerModel).subscribe(response => {
      this.router.navigate(['auth']);
    }, err => {

    })
  }

  logOut() {
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("profile");
    this.router.navigate(["auth"]);
  }
}

export function tokenGetter() {
  return sessionStorage.getItem("jwt");
}

interface LoginModel {
  email: string,
  password: string
}

interface RegisterModel {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  createProfile: boolean,
  profileName: string
}
