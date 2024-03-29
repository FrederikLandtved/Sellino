import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MediaService } from 'src/app/services/media/media.service';
import { ProfilePageWithSectionsModel } from 'src/app/services/profile/profile-page.service';

@Component({
  selector: 'sl-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss']
})
export class ProfilePreviewComponent implements OnInit, OnChanges {
  @Input() profileName: string = '';
  @Input() bio: string = '';
  @Input() profileMediaId: number | null = 0;
  @Input() coverMediaId: number | null = 0;
  @Input() pageToShow: ProfilePageWithSectionsModel | null = null;
  isLoading: boolean = false;

  profileMedia: string = '';
  coverMedia: string = '';

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    if (this.profileMediaId !== null && this.profileMediaId > 0) {
      this.loadMedia(this.profileMediaId, true);
    }

    if (this.coverMediaId !== null && this.coverMediaId > 0) {
      this.loadMedia(this.coverMediaId, false);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('profileMediaId' in changes && this.profileMediaId !== null && this.profileMediaId > 0) {
      this.loadMedia(this.profileMediaId, true);
    }

    if ('coverMediaId' in changes && this.coverMediaId !== null && this.coverMediaId > 0) {
      this.loadMedia(this.coverMediaId, false);
    }

    if ('pageToShow' in changes) {
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
      }, 100);
    }
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
