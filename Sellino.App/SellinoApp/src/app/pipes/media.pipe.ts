import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media'
})
export class MediaPipe implements PipeTransform {

  transform(mediaData: any, ...args: unknown[]): unknown {
    if(mediaData != null){
      const base64String = mediaData.MediaData;
  
      const dataURL = `data:${mediaData.Type};base64,${base64String}`;
      return dataURL;
    }

    return "";
  }

}
