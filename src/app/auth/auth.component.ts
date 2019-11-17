import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebase} from 'firebaseui-angular';
import * as firebaseui from 'firebaseui';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  ui;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {
    const uiConfig = {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: this.onLoginSuccesfull.bind(this)
      }
    };

    this.ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(this.angularFireAuth.auth);
    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

  onLoginSuccesfull() {
    this.router.navigate(['/dashboard']);
  }
}
