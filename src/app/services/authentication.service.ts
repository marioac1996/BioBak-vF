import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);

  constructor(
    public afAuth: AngularFireAuth
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
  		return new Promise((resolve,reject)=>{
  			if(firebase.auth().currentUser){
  				firebase.auth().signOut()
  				.then(()=>{
  					console.log("Log Out");
  					resolve();
  				}).catch((error)=>{
  					reject();
  				})
  			}
  		})
  	}
  	userDetails(){
  		return firebase.auth().currentUser;
  	}
    isAuthenticated() {
      return this.authState.value;
    }
}