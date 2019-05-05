import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";
  constructor(public afAuth: AngularFireAuth,private nav: NavController) { }

  ngOnInit() {
  }

  async login() {
    const { username, password } = this;

    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
      console.log(res);
      this.nav.navigateBack('succes');
    } catch (err) {
      console.dir(err);
    }
  }

}
