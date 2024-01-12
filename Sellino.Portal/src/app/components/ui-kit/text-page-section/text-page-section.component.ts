import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TextPageSectionService } from 'src/app/services/text-page-section/text-page-section.service';

@Component({
  selector: 'sl-text-page-section',
  templateUrl: './text-page-section.component.html',
  styleUrls: ['./text-page-section.component.scss']
})
export class TextPageSectionComponent implements OnInit {
  textToRender: SafeHtml = "";
  @Input() textPageSectionId: number = 0;

  constructor(private textPageSectionService: TextPageSectionService, private sanitizer: DomSanitizer) {}
  
  ngOnInit(): void {
    if(this.textPageSectionId > 0){
      this.textPageSectionService.GetTextPageSection(this.textPageSectionId).subscribe(data => {
        this.textToRender = data.Content;
        this.textToRender = this.sanitizer.bypassSecurityTrustHtml(data.Content);
      });
    }
  }
}
