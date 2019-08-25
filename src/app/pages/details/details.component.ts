import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { AlertController } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';
import { MessageService } from 'src/app/services/message.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @ViewChild('detailsForm', { read: true, static: false }) detailsForm: NgForm;
  message: any;
  subscription: Subscription;
  pageTitle = "Account Details";
  accountBalance: any;
  accountOverdraft: any;
  receivedParams: any;
  accountNumber: any;
  transactionType: string;
  showCardPanel = false;
  amount: any;

  constructor(private messageService: MessageService, private router: Router, private transactionService: TransactionService,
    private alertController: AlertController, private clientService: ClientService) {
    this.receivedParams = this.router.getCurrentNavigation().extras.state;


    this.subscription = this.messageService.getMessage().subscribe(response => {
      if (response !== undefined) {
        this.message = response;
        try {
          let responseObject = JSON.parse(this.message);
          this.accountBalance = responseObject.balance;
          this.accountOverdraft = responseObject.overdraft;
        } finally {

        }

      }
    });
  }

  ngOnInit() {
    if (this.receivedParams) {
      this.accountBalance = "Balance: R" + this.receivedParams.balance;
      this.accountNumber = this.receivedParams.accountNumber;
      this.accountOverdraft = "Overdraft: R" + this.receivedParams.overdraft;
    }

  }

  deposit() {
    this.transactionType = "Deposit";
    this.showCardPanel = true;
  }

  withdraw() {
    this.transactionType = "Withdraw";
    this.showCardPanel = true;
  }

  continue() {
    if (this.transactionType === "Deposit") {
      let newAmount = parseFloat(this.amount + this.receivedParams.balance);
      this.transactionService.transaction(this.accountNumber, newAmount,
        this.receivedParams.overdraft, this.receivedParams.idToken);
    }
    if (this.transactionType === "Withdraw") {
      if (parseFloat(this.amount) > parseFloat(this.receivedParams.balance)) {
        this.confirmTransaction(this.amount, this.receivedParams.balance)
      } else {
        let newBalance = parseFloat(this.receivedParams.balance) - parseFloat(this.amount);
        this.transactionService.transaction(this.accountNumber, this.amount,
          newBalance, this.receivedParams.idToken);
      }
    }
  }

  async confirmTransaction(amount, balance) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>This withdrawal will increase your overdraft</strong>!!!',
      buttons: [
        {
          text: 'Decline',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Accept',
          handler: () => {
            let newAmount = parseFloat(amount) - parseFloat(balance);
            let newBalance = 0.0;
            this.transactionService.transaction(this.accountNumber, newBalance,
              newAmount, this.receivedParams.idToken);
          }
        }
      ]
    });

    await alert.present();
  }


  hide() {
    this.showCardPanel = false;
  }

}
