import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileModel } from './profile';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://localhost:7240';

  constructor(private http: HttpClient) { }

  GetProfileForEdit() : Observable<ProfileModel> {
    var profile = this.http.get<ProfileModel>(this.apiUrl + '/Profile/Edit');
    return profile;
  }

  UpdateProfile(model: ProfileModel) : Observable<ProfileModel> {
    var profile = this.http.put<ProfileModel>(this.apiUrl + '/Profile/Edit', model);
    return profile;
  }
}
