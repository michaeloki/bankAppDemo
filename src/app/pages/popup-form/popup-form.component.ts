import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-form',
  template: `
    <ion-list>
      <ion-item (click)="createAccount()">New Account</ion-item>
      <ion-item (click)="logout()">Logout</ion-item>
    </ion-list>
  `
})
export class PopupFormComponent implements OnInit {

  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController, private router: Router) { }

  ngOnInit() { }

  createAccount() {
    this.DismissClick();
    this.router.navigate(['/openAccount']);
  }

  async DismissClick() {
    await this.popoverCtrl.dismiss();
  }

  logout() {
    localStorage.clear();
    this.DismissClick();
    this.router.navigate(['/']);
  }

}
