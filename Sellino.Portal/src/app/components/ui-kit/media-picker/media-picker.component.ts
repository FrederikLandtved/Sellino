import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { MediaService } from 'src/app/services/media/media.service';

@Component({
  selector: 'sl-media-picker',
  templateUrl: './media-picker.component.html',
  styleUrls: ['./media-picker.component.scss']
})
export class MediaPickerComponent implements OnInit, OnChanges {
  @Input() icon: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() formControlName: FormControl<any> = new FormControl('');
  @Input() mediaId: number | null = null;
  @Input() value: string = '';

  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  isInputFocused: boolean = false;
  selectedImage: SafeUrl | undefined;

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    if (this.mediaId !== null && this.mediaId !== 0) {
      this.loadMedia(this.mediaId);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('mediaId' in changes && this.mediaId !== null && this.mediaId !== 0) {
      this.loadMedia(this.mediaId);
    }
  }

  private loadMedia(mediaId: number | null): void {
    if (mediaId !== null) {
      this.mediaService.GetMedia(mediaId).subscribe(data => {
        if (data.MediaData) {
          this.selectedImage = this.mediaService.ConvertMedia(data); // Sanitize the URL
        }
      });
    }
  }
  
  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
        this.mediaService.UploadMedia(file).subscribe(data => this.valueChange.emit(data));
      };

      reader.readAsDataURL(file);
    } else {
      this.selectedImage = undefined;
    }
  }

  onInputFocus() {
    this.isInputFocused = true;
  }

  onInputBlur() {
    this.isInputFocused = false;
  }
}
