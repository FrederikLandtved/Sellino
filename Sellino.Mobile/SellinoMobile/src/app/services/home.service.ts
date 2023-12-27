import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiUrl = "https://walrus-app-6oisd.ondigitalocean.app";

  constructor(private http: HttpClient) { }

  GetHomePage() {
    return this.http.get<string>(this.apiUrl + '/Auth/Touch');
  }
}
