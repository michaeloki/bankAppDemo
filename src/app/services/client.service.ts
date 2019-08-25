import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { MessageService } from './message.service';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  API_URL  = "https://momentum-retail-practical-test.firebaseio.com";
  constructor(private  httpClient:  HttpClient,public http: HTTP,
    private messageService: MessageService) {
     
     }
  listOfAccounts: any = [];

  public getClientData(objectData) {
    let finalURL = this.API_URL+"/clients"+"/"+objectData.id+".json?auth="+objectData.idToken;
    this.http.get(finalURL, {}, {})
  .then(data => {
    this.sendData(data.data);
  })
  .catch(error => {
    console.log(error.status);
    console.log(error.error);
  });
  //this.messageService.clearMessage();
  }

  public getClientAccountData(accountNum,idToken) {
    let finalURL = this.API_URL+"/accounts/"+accountNum+".json?auth="+idToken;
    this.http.get(finalURL, {}, {})
  .then(data => {
    console.log('clientacctdata returned ',data.data);
    this.sendData(data.data);
/*     console.log('clientacctdata returned ',data.data);
    let acctObj = {"account":accountNum,"details": JSON.stringify(data.data)};
    this.listOfAccounts.push = acctObj;
    console.log('formatted list',acctObj);
    console.log('nums is ',nums);
    if(nums===this.listOfAccounts.length) {
      this.sendMessage(JSON.stringify(this.listOfAccounts));
    } */
    //this.sendMessage(acctObj);
/*     let json = JSON.stringify(data.data);
    console.log('formatted ',json); */
    //this.sendMessage(data.data);
  })
  .catch(error => {
    console.log(error.status);
    console.log(error.error);
  });
  }

  sendData(message): void {
    this.messageService.sendMessage(message);
  }


/*   sendMessage(message): void {
    console.log('message is',message);
    this.messageService.saveAccount(message);
  } */

  clearMessage(): void {
    this.messageService.clearMessage();
  }

}
