import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaModel } from './media';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  UploadMedia(file: any) : Observable<number> {
    let fd = new FormData();
    fd.append("File", file);
    return this.http.post<number>(this.apiUrl + '/Media/UploadFile', fd)
  }

  GetMedia(mediaId: number | null) : Observable<MediaModel> {
    return this.http.get<MediaModel>(this.apiUrl + '/Media/' + mediaId);
  }

  ConvertMedia(mediaData: MediaModel) : string{
    const base64String = mediaData.MediaData;
  
    const dataURL = `data:${mediaData.Type};base64,${base64String}`;
    return dataURL;
  }
}
