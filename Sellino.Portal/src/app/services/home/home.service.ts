import { Injectable } from '@angular/core';
import { ProfileModel } from '../profile/profile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'https://localhost:7240';

  constructor(private http: HttpClient) { }

  getHomePage(): Observable<HomeModel> {
    return this.http.get<HomeModel>(this.apiUrl + '/GetHomePage');
  }
}

export interface HomeModel {
  FirstName: string,
  Profile: ProfileModel
}