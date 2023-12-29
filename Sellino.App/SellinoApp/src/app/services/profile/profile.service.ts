import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = "https://localhost:7240";
  // private apiUrl = "https://walrus-app-6oisd.ondigitalocean.app";

  constructor(private http: HttpClient) { }

  GetProfilesWithProducts() {
    return this.http.get<[]>(this.apiUrl + '/Profiles/Products');
  }
}
