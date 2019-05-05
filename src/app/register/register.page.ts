import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(public afAuth: AngularFireAuth,private nav: NavController) { }

  ngOnInit() {
  }


  async register() {
    const { username, password, cpassword } = this;
    if (password !== cpassword) {
      return console.error("Passwords don't match")
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password);
      console.log(res);
      this.nav.navigateBack('home');
    } catch (err) {
      console.dir(err);
    }

  }


}
