import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileModel } from './profile';

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

  GetProfile(profileToken: string) : Observable<ProfileModel> {
    return this.http.get<ProfileModel>(this.apiUrl + '/Profiles/' + profileToken);
  }
}
