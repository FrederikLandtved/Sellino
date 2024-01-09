import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndpoint } from '../apiEndpoint';

@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {
  private apiUrl = apiEndpoint;

  constructor(private http: HttpClient) { }

  GetProfilePages() : Observable<ProfilePageWithSectionsModel[]> {
    var profile = this.http.get<ProfilePageWithSectionsModel[]>(this.apiUrl + '/ProfilePages/Sections');

    return profile;
  }

  GetProfilePageForProfile(profileId: number) : Observable<ProfilePageWithSectionsModel[]> {
    var profile = this.http.get<ProfilePageWithSectionsModel[]>(this.apiUrl + '/Profiles/' + profileId + '/ProfilePages/Sections');

    return profile;
  }

  CreateProfilePage(profilePageName: string) : Observable<ProfilePageModel> {
    var profilePageModel: ProfilePageModel = {Name: profilePageName, IsFrontpage: false, ProfileId: 0};    
    var profilePage = this.http.post<ProfilePageModel>(this.apiUrl + "/ProfilePages", profilePageModel);
    
    return profilePage;
  }

  CreatePageSection(pageSectionModel: ProfilePageSectionModel, page: ProfilePageWithSectionsModel) : Observable<number> {
    var pageModel = { Name: pageSectionModel.Name, ProfilePageId: page.ProfilePage.ProfilePageId, ProfilePageSectionType: pageSectionModel.ProfilePageSectionType, DataId: pageSectionModel.DataId, SortIndex: pageSectionModel.SortIndex };
    var pageSectionId = this.http.post<number>(this.apiUrl + "/ProfilePageSections/" + page.ProfilePage.ProfilePageToken, pageModel);

    return pageSectionId;
  }

  DeleteProfilePage(profilePageToken: string) : Observable<boolean> {
    var isDeleted = this.http.delete<boolean>(this.apiUrl + '/ProfilePages/' + profilePageToken);

    return isDeleted;
  }

  UpdateProfilePage(model: ProfilePageModel, profilePageToken: string) : Observable<boolean> {
    console.log("model", model);
    
    var updatePageModel = { model: model, profilePageToken: profilePageToken };
    var isUpdated = this.http.put<boolean>(this.apiUrl + '/ProfilePages/' + profilePageToken + '/Edit', model);

    return isUpdated;
  }
}

export interface ProfilePageWithSectionsModel {
  ProfilePage: ProfilePageModel,
  Sections: ProfilePageSectionModel[],
  showSections: boolean,
}

export interface ProfilePageSectionModel {
  Name: string,
  ProfilePageSectionType: number,
  DataId: number,
  SortIndex: number,
  ProfilePageSectionId: number
}

export interface ProfilePageModel {
  Name: string;
  IsFrontpage: boolean;
  ProfilePageId?: number;
  ProfilePageToken?: string
  ProfileId: number
}
