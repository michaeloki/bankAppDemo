import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CreateAccountService } from 'src/app/services/create-account.service';
import { MessageService } from 'src/app/services/message.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.scss'],
})
export class OpenAccountComponent implements OnInit {
  @ViewChild('bioForm',{ read: true, static: false })bioForm: NgForm;
  pageTitle = "New Account";
  displayName: any;
  email: any;
  password: any;
  storedToken = this.messageService.getAccountInfo('tokens');
  message: any;
  subscription: Subscription;

  constructor(private router: Router,
    private createAccountService: CreateAccountService,
    private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(response => {
      this.message = response;
      if (this.message !== undefined) {
        
        try {
          let responseObject = JSON.parse(this.message.text.status);
          
          if(responseObject === 200) {
            this.email = "";
            this.password = "";
            this.displayName = "";
            this.messageService.presentAlert('Account creation was successful','Message');
          }
        } finally { }
      }
    });
  }

  close() {
    const navigationExtras: NavigationExtras = {
      state: {
        id: this.storedToken.localId,
        idToken: this.storedToken.idToken,
        refreshToken: this.storedToken.refreshToken
      }
    };
    this.router.navigate(['/dashboard'], navigationExtras);
  }

  generateAccount(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
  }

  create() {
    if (this.email != undefined) {
      let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

      if (regexp.test(this.email) && this.password != undefined
        && this.displayName !== undefined) {
        let newAccountNumber = this.generateAccount(9);


        let createAccountObject = {
          "email": this.email,
          "password": this.password,
          "displayName": this.displayName,
          "balance": 0.0,
          "overdraft": 0.0,
          "accountNumber": newAccountNumber,
          "idToken": this.storedToken.idToken
        }
        this.createAccountService.createAccount(createAccountObject);
      } else {
        this.messageService.presentAlert('Please fill the form','Validation');
      }
    }

  }

  ngOnInit() {

  }

}
