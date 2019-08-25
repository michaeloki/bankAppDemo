import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MessageService } from './message.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {
  message: any;
  subscription: Subscription;
  loadingMessage: String;

  constructor(public http: Http,
    private messageService: MessageService) {
      this.subscription = this.messageService.getMessage().subscribe(message => {
        this.message = message;
      });
     }

  createAccount(accountObject) {
    let accountNumber = accountObject.accountNumber;
    let idToken = accountObject.idToken;
    let API_URL  =  'https://momentum-retail-practical-test.firebaseio.com/accounts/'+accountNumber+".json"
    +'?auth='+idToken;
    let email = accountObject.email;
    let password = accountObject.password;
    let displayName = accountObject.displayName;
    let balance = accountObject.balance;
    let overdraft = accountObject.overdraft;
    this.http.post(`${API_URL}`,{
        "email":email,
        "password":password,
        "displayName": displayName,
        "balance": balance,
        "overdraft": overdraft
    })
    .subscribe(
        (val) => {   
                 this.sendMessage(val);               
        },
        response => {   
            this.sendMessage(response);           
        },
        () => {
            console.log("The POST observable for createAccount is done");
        });        
  }
  sendMessage(message): void {
    this.messageService.sendMessage(message);
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }
}

