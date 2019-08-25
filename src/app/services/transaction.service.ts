import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from  '@angular/common/http';
import { Http } from '@angular/http';
//import {Subscription} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  balance: any;
  amount: any;
  transactionType: string;
  //private subscription: Subscription;

  constructor(private http: Http,private messageService: MessageService) { }

  public transaction(accountNumber,transactionAmount,overdraft,idToken) {
let url = "https://momentum-retail-practical-test.firebaseio.com/accounts/"
+accountNumber+".json?auth="+idToken;
    this.http.put(url,
      {
        "balance": transactionAmount,
        "overdraft": overdraft
      })
      .subscribe(
        val => {
          this.sendMessage(val);
        },
        response => {
          this.sendMessage(response);
        },
        () => {
          console.log("The PUT observable is now completed.");
        }
      );
  }

  sendMessage(message): void {
    this.messageService.sendMessage(message);
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }
}
