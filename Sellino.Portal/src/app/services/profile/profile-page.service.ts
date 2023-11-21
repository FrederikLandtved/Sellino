import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {

  private apiUrl = 'https://localhost:7240';

  constructor(private http: HttpClient) { }

  GetProfilePages() : Observable<ProfilePageWithSectionsModel[]> {
    var profile = this.http.get<ProfilePageWithSectionsModel[]>(this.apiUrl + '/ProfilePages/Sections');

    return profile;
  }

  CreateProfilePage(profilePageName: string) : Observable<ProfilePageModel> {
    var profilePageModel: ProfilePageModel = {Name: profilePageName, IsFrontpage: false};
    console.log("yuhu");
    
    var profilePage = this.http.post<ProfilePageModel>(this.apiUrl + "/ProfilePages", profilePageModel);
    console.log("efter");
    
    return profilePage;
  }

  CreatePageSection(pageSectionModel: ProfilePageSectionModel, page: ProfilePageWithSectionsModel) : Observable<number> {
    var pageModel = { Name: pageSectionModel.Name, ProfilePageId: page.ProfilePage.ProfilePageId, ProfilePageSectionType: pageSectionModel.ProfilePageSectionType, DataId: pageSectionModel.DataId, SortIndex: pageSectionModel.SortIndex };
    var pageSectionId = this.http.post<number>(this.apiUrl + "/ProfilePageSections/" + page.ProfilePage.ProfilePageToken, pageModel);

    return pageSectionId;
  }
}

export interface ProfilePageWithSectionsModel {
  ProfilePage: ProfilePageModel,
  Sections: ProfilePageSectionModel[],
  showSections: boolean,
  showAddNewSection: boolean
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
}
