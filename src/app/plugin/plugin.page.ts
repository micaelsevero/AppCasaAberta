import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.page.html',
  styleUrls: ['./plugin.page.scss'],
})
export class PluginPage implements OnInit, AfterViewInit {
  @ViewChild("googleMaps", { static: false}) elementRef: ElementRef;
  
  base64Image: string[];
  //base64Image: Array<string>;
  //base64Image = [];
  //base64Image: any;

  constructor(private camera: Camera, private geolocation: Geolocation) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let refMap = this.elementRef.nativeElement;

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      let meuLocal = { lat:-23.612437099999998, lng: -46.7722193 };

      const map = new google.maps.Map(refMap, {
        center: meuLocal,
        zoom: 18
      });
  
      var marker = new google.maps.Marker({position: meuLocal, map: map});
      //var marker2 = new google.maps.Marker({position: { lat:-23.611437099999998, lng: -46.7722193 }, map: map});
      //var marker3 = new google.maps.Marker({position: { lat:-23.610437099999998, lng: -46.7722193 }, map: map});

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  tirarFoto() {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image.push('data:image/jpeg;base64,' + imageData);
    }, (err) => {
     // Handle error
    });
  }

  localizacao() {
    this.geolocation.getCurrentPosition().then((resp) => {
      alert("Lat: " + resp.coords.latitude);
      alert("Lon: " + resp.coords.longitude);
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
