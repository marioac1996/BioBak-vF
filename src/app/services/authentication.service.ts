import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { FloraService } from './flora.service';
import 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);

  constructor(
	public afAuth: AngularFireAuth,
	private floraService: FloraService,
    ) { }
  	loginUser(value){
  		return new Promise((resolve,reject)=>
  		{
  			firebase.auth().signInWithEmailAndPassword(value.email,value.password)
  		.then(
  			res=>resolve(res),
  			err =>reject(err)
  			)
  		}
  			)
  		}
  	logoutUser(){
		return new Promise((resolve, reject) => {
			this.afAuth.auth.signOut()
			.then(() => {
			  this.floraService.unsubscribeOnLogOut();
			  resolve();
			}).catch((error) => {
			  console.log(error);
			  reject();
			});
		  })
  	}
  	userDetails(){
  		return firebase.auth().currentUser;
  	}
    isAuthenticated() {
      return this.authState.value;
    }
}