import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';


import { IonicModule, NavController } from '@ionic/angular';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage]
})
export class LoginPageModule implements OnInit {
  username: string = "";
  password: string = "";
  constructor(public afAuth: AngularFireAuth, private nav: NavController) {

  }

  ngOnInit(){

  }

  async login() {
    const { username, password } = this;
    try {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
        this.nav.navigateBack('succes');
    } catch (err) {
      console.dir(err);
    }
  }
}
