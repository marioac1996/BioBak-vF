import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { LoadingController } from '@ionic/angular';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import 'rxjs';

@Component({
  selector: 'app-listflora',
  templateUrl: './listflora.page.html',
  styleUrls: ['./listflora.page.scss'],
})
export class ListfloraPage implements OnInit  {

  items: Array<any>;

  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData(){
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        this.items = data;
      })
    })
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}
