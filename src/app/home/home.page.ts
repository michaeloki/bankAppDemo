import { Component, DoCheck } from '@angular/core';
import { LoginService } from '../services/login.service';
import { MessageService } from '../services/message.service';
import { Subscription } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements DoCheck {
  message: any;
  subscription: Subscription;
  loadingMessage: String;
  
  constructor(private loginService: LoginService,private messageService: MessageService,
    public router: Router) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.message = message;
      if(message!==undefined) {
        try {
        let responseObject = JSON.parse(message.text._body);
        if(responseObject.registered) {
          localStorage.setItem('tokens', JSON.stringify(responseObject));
          this.messageService.stopLoader();
          this.openDashboard(responseObject);
        } else {
          this.messageService.presentAlert('User is not registered','Oops!');
        }
      } finally{}
      }
    });
  }

  openDashboard(dataObject) {
      const navigationExtras: NavigationExtras = {
        state: {
          id: dataObject.localId,
          idToken: dataObject.idToken,
          refreshToken: dataObject.refreshToken,
        }
      };

      this.router.navigate(['/dashboard'], navigationExtras);
      this.messageService.clearMessage();
  }

  validatePassword(password) {
    let passw = /^[A-Za-z]\w{7,14}$/;
    if (password.match(passw)) {}
  }

  ngDoCheck() {
    if(this.email!=undefined ){
      let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

      if (regexp.test(this.email) && this.password == 'password') {
          this.showBtn = true;
      }
    }
  }

  private loginTitle = "Digital Banking";
  private formTitle = "Enter your details below";
  email: any;
  password: any;
  private showBtn = false;

  private login() {
    this.loadingMessage = "Signing in...";
    this.messageService.Loader(this.loadingMessage);
    this.loginService.signIn(this.email.trim(),this.password.trim());
  }

}
