import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileModel } from './profile';
import { apiEndpoint } from '../apiEndpoint';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = apiEndpoint;
  // private apiUrl = "https://walrus-app-6oisd.ondigitalocean.app";

  constructor(private http: HttpClient) { }

  GetProfilesWithProducts() {
    return this.http.get<[]>(this.apiUrl + '/Profiles/Products');
  }

  GetProfile(profileToken: string) : Observable<ProfileModel> {
    return this.http.get<ProfileModel>(this.apiUrl + '/Profiles/' + profileToken);
  }
}
