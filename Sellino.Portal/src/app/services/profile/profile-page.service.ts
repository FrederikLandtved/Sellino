import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {

  private apiUrl = 'https://localhost:7240';

  constructor(private http: HttpClient) { }

  GetProfilePages() : Observable<ProfilePageModel[]> {
    var profile = this.http.get<ProfilePageModel[]>(this.apiUrl + '/ProfilePages');
    return profile;
  }

  CreateProfilePage(profilePageName: string) : Observable<ProfilePageModel> {
    var profilePageModel: ProfilePageModel = {Name: profilePageName, IsFrontpage: false};
    console.log("yuhu");
    
    var profilePage = this.http.post<ProfilePageModel>(this.apiUrl + "/ProfilePages", profilePageModel);
    console.log("efter");
    
    return profilePage;
  }
}

export interface ProfilePageModel {
  Name: string;
  IsFrontpage: boolean;
}
