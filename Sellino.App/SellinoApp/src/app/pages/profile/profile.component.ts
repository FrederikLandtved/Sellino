import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProfileService } from '../../services/profile/profile.service';
import { ProfileModel } from '../../services/profile/profile';
import { MediaService } from '../../services/media/media.service';
import { ProfilePageService, ProfilePageWithSectionsModel } from '../../services/profile/profile-page.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profileToken: any;
  isLoading: boolean = true;
  profileModel: ProfileModel = {ProfileId: 0, Name: '', Bio: '', CompanyHexColor: '', DarkCompanyHexColor: '', TextOnCompanyHexColor: '', SecondaryCompanyHexColor: '', TextOnSecondaryCompanyHexColor: '', TextOnDarkCompanyHexColor: '', ProfileMediaId: 0, CoverMediaId: 0};
  profileMedia: string = '';
  coverMedia: string = '';
  pageToShow: ProfilePageWithSectionsModel | null = null;
  loadingIndicatorColor: string = 'black';
  constructor(private route: ActivatedRoute, private profileService: ProfileService, private mediaService: MediaService, private profilePageService: ProfilePageService) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.profileToken = params.get('token');
  
        this.profileService.GetProfile(this.profileToken).subscribe(data => {
          this.isLoading = true;
          this.loadingIndicatorColor = data.SecondaryCompanyHexColor;
          
          setTimeout(() => {
            this.profileModel = data;

            if (this.profileModel.ProfileMediaId !== null && this.profileModel.ProfileMediaId > 0) {
              this.mediaService.GetMedia(this.profileModel.ProfileMediaId).subscribe(data => {
                this.loadMedia(this.profileModel.ProfileMediaId, true);
              })
            }
        
            if (this.profileModel.CoverMediaId !== null && this.profileModel.CoverMediaId > 0) {
              this.loadMedia(this.profileModel.CoverMediaId, false);
            }
    
            this.profilePageService.GetProfilePageForProfile(this.profileModel.ProfileId).subscribe(data => {
              this.pageToShow = data[0];
            })
    
            this.isLoading = false;  
          }, 1000);
        });
      });
  }


  private loadMedia(mediaId: number | null, isProfileMedia: boolean): void {
    if (mediaId !== null) {
      this.mediaService.GetMedia(mediaId).subscribe(data => {
        if (data.MediaData) {
          if(isProfileMedia){
            this.profileMedia = this.mediaService.ConvertMedia(data);
          }else{
            this.coverMedia = this.mediaService.ConvertMedia(data);
          }
        }
      });
    }
  }
}
