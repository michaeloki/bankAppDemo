import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from  '@angular/common/http';
import { Http } from '@angular/http';
//import {Subscription} from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL  =  'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAR4Yezxk7Ao4qeFntu7tIvE7pH28Eh64Y';
  private loginResponse:any;
  //private subscription: Subscription;

  constructor(private  httpClient:  HttpClient,public http: Http,
    private messageService: MessageService) { }

  signIn(email,password) {
    this.http.post(`${this.API_URL}`,{
        "email":email,
        "password":password,
        "returnSecureToken": true
    })
    .subscribe(
        (val) => {   
                 this.sendMessage(val);               
        },
        response => {   
            this.sendMessage(response);           
        },
        () => {
            console.log("The POST observable is now completed.");
        });        
  }
  sendMessage(message): void {
    this.messageService.sendMessage(message);
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }
}
