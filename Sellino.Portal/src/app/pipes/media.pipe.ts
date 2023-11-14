import { Pipe, PipeTransform } from '@angular/core';
import { MediaModel } from '../services/media/media';
import { MediaService } from '../services/media/media.service';

@Pipe({
  name: 'media'
})
export class MediaPipe implements PipeTransform {

  constructor(private mediaService: MediaService) {}

  transform(media: MediaModel): string {
    return this.mediaService.ConvertMedia(media);
  }

}
