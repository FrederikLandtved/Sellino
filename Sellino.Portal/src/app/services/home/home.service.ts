import { Injectable } from '@angular/core';
import { ProfileModel } from '../profile/profile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHomePage(): Observable<HomeModel> {
    return this.http.get<HomeModel>(this.apiUrl + '/GetHomePage');
  }
}

export interface HomeModel {
  FirstName: string,
  Profile: ProfileModel
}