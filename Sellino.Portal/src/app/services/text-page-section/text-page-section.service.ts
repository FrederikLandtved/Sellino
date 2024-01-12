import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TextPageSectionService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  CreateTextPageSection(content: string) : Observable<number> {
    let textPageSectionId = this.http.post<number>(this.apiUrl + '/TextPageSections', { Content: content });

    return textPageSectionId;
  }

  GetTextPageSection(textPageSectionId: number) : Observable<TextPageSection> {
    return this.http.get<TextPageSection>(this.apiUrl + '/TextPageSections/' + textPageSectionId);
  }
}

export interface TextPageSection {
  TextPageSectionId: number,
  TextPageSectionToken: string,
  Content: string
}
