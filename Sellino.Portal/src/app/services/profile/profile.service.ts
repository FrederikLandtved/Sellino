import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileModel } from './profile';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = environment.apiUrl;

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
