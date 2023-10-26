import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaModel } from './media';
@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private apiUrl = 'https://localhost:7240';

  constructor(private http: HttpClient) { }

  UploadMedia(file: any) : Observable<number> {
    let fd = new FormData();
    fd.append("File", file);
    return this.http.post<number>(this.apiUrl + '/Media/UploadFile', fd)
  }

  GetMedia(mediaId: number | null) : Observable<MediaModel> {
    return this.http.get<MediaModel>(this.apiUrl + '/Media/' + mediaId);
  }
}
