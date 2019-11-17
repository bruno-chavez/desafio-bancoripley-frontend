import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
