import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiUrl;

  constructor(private toastr: ToastrService, private http: HttpClient, private router: Router) { }

  authenticate(email: string, password: string) {
    let loginModel: LoginModel = {email: email, password: password};

    return this.http.post<LoginModel>(this.apiUrl + '/Auth/Login', loginModel);
  }

  register(email: string, password: string, firstName: string, lastName: string, createProfile: boolean, profileName: string = "") {
    let registerModel: RegisterModel = { email: email, password: password, firstName: firstName, lastName: lastName, createProfile: createProfile, profileName: profileName };

    this.http.post<LoginModel>(this.apiUrl + '/Auth/AddUser', registerModel).subscribe(response => {
      this.router.navigate(['auth']);
      this.toastr.success("Du kan nu logge ind!")
    }, err => {
      console.log(err);
      
      this.toastr.error(err.error.response);
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
