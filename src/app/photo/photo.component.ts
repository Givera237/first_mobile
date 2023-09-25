import { Component } from '@angular/core';
declare var navigator: any;
declare var Camera: any;

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent
{
  photo!: string;

  capture() {
    navigator.camera.getPicture((imageData : any) => {
      this.photo = "data:image/jpeg;base64," + imageData;
    }, (err : any) => {
      console.log(err);
    }, {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL
    });
  }

}
