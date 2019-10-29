import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service'
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(
    private authService:AuthenticationService,
    private navCtrl:NavController
    ) { }

  ngOnInit() {
  }
  logout(){
    this.authService.logoutUser()
    .then(res =>{
      console.log(res);
      this.navCtrl.navigateBack('');
    }
    ).catch(
    error=>{
      console.log(error);
    }
    );
  }
}