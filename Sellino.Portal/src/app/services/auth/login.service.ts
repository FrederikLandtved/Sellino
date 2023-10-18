import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://localhost:7240';

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string): Observable<any> {
    let loginModel: LoginModel = {email: email, password: password};

    return this.http.post<LoginModel>(this.apiUrl + '/Auth/Login', loginModel);
  }
}

interface LoginModel {
  email: string,
  password: string
}
