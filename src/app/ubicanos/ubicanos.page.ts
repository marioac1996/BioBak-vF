import { Component, OnInit,ElementRef,ViewChild,AfterViewInit,NgZone} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  HtmlInfoWindow,
  BaseArrayClass,
  MarkerOptions,
  ILatLng
} from '@ionic-native/google-maps';
declare var google;
@Component({
  selector: 'app-ubicanos',
  templateUrl: './ubicanos.page.html',
  styleUrls: ['./ubicanos.page.scss'],
})


export class UbicanosPage implements OnInit {
	map: GoogleMap;
	loading: any;

  constructor(
  	private platform: Platform, 
  	private _ngZone: NgZone,
  	public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
  	) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
    //await this.localizar();
  }

  loadMap() {
  	let POINTS: BaseArrayClass<any> = new BaseArrayClass<any>([
      {
      	title: "Oficinas Municipio Bacalar",
        position: {lat:18.677649, lng:-88.390490},
        iconData: "../assets/img/u.jpg"
      }
    ]);

    let bounds: ILatLng[] = POINTS.map((data: any, idx: number) => {
      console.log(data);
      return data.position;
    });

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: bounds
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true,
      },
       'controls': {
        'compass': true,
        'myLocation': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'streetviewcontrol':true,
        'zoom': true,
        'mapToolbar': true
      }
    });
    POINTS.forEach((data: any) => {
      data.disableAutoPan = true;
      let marker: Marker = this.map.addMarkerSync(data);
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick);
      marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(this.onMarkerClick);
    });


  }
  onMarkerClick(params: any) {
    let marker: Marker = <Marker>params[1];
    let iconData: any = marker.get('iconData');
    marker.setIcon(iconData);
  }
  async localizar() {
    this.map.clear();

    this.loading = await this.loadingCtrl.create({
      message: 'Espere Por favor ...'
    });
    await this.loading.present();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();
      //console.log(JSON.stringify(location, null ,2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        tilt: 30
      });

      // add a marker
      let marker: Marker = this.map.addMarkerSync({
        title: 'Ubicación actual',
        snippet: 'Aqui estoy!',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // show the infoWindow
      marker.showInfoWindow();
    })
    .catch(err => {
      this.loading.dismiss();
      this.showToast(err.error_message);
    });
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }


}
