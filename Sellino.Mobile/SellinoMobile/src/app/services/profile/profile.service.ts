import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = "https://localhost:7240";

  constructor(private http: HttpClient) { }

  GetProfilesWithProducts() {
    return this.http.get<[]>(this.apiUrl + '/Profiles/Products');
  }
}
