import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { NavController, PopoverController, Platform, AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ClientService } from '../../services/client.service';
import { Router, NavigationExtras } from '@angular/router';
import { PopupFormComponent } from '../popup-form/popup-form.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  message: any;
  subscription: Subscription;
  accountSubscription: Subscription;
  loadingMessage: string;
  private accountList: any = [];
  private receivedParams: any;
  private welcomeMessage: string;
  private showPanel = false;
  private selectedAccount: string;

  constructor(private messageService: MessageService, private navCtrl: NavController,
    private clientService: ClientService, public navRoute: Router,
    public popoverController: PopoverController, private platform: Platform,
    private alertController: AlertController) {
    this.messageService.Loader('Fetching your details...');
    if (navRoute.getCurrentNavigation().extras.state != undefined) {
      this.receivedParams = navRoute.getCurrentNavigation().extras.state;

      this.subscription = this.messageService.getMessage().subscribe(response => {
        if (response !== undefined) {
          this.message = response;
          try {
          let responseObject = JSON.parse(this.message.text);
          if (responseObject.name !== undefined) {
            this.welcomeMessage = "Welcome " + responseObject.name + " !";
            this.accountList = responseObject.accounts;
          }

          let myResponseObj = {
            localId: responseObject.localId, idToken: responseObject.idToken,
            name: responseObject.name, accounts: responseObject.accounts
          }

          localStorage.setItem('clientDetails', JSON.stringify(myResponseObj));
          this.showPanel = true;
        } catch {}
          
          this.messageService.stopLoader();
        }
      });
      this.accountSubscription = this.messageService.getAccount()
        .subscribe(data => {
          if (data !== undefined) {
            try {
              let accountObject = JSON.parse(data.text);
              if (accountObject.balance !== undefined) {
              }

              let storedToken = this.messageService.getAccountInfo('tokens');

              const navigationExtras: NavigationExtras = {
                state: {
                  accountNumber: this.selectedAccount,
                  balance: accountObject.balance,
                  overdraft: accountObject.overdraft,
                  idToken: storedToken.idToken
                }
              };


              localStorage.setItem(this.selectedAccount, JSON.stringify({ balance: accountObject.balance, overdraft: accountObject.overdraft }));

              if (accountObject.balance !== undefined) {
                this.openDetails(navigationExtras);
              }
            } finally {
              //
            }
          }
        });
      this.getAccounts();
    } else {
      this.navRoute.navigate(['']);
    }

  }

  fetchDetails(event, myItem) {
    this.selectedAccount = myItem;
    this.clientService.getClientAccountData(this.selectedAccount, this.receivedParams.idToken);
  }

  openDetails(navigationExtras) {
    this.navRoute.navigate(['/details'], navigationExtras);
  }

  ngOnInit() {

  }

  async closeCallBack() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>You will be logged out</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            localStorage.clear();
            this.navRoute.navigate(['/']);
          }
        }
      ]
    });
    await alert.present();
  }


  ionViewDidEnter() {
    this.platform.backButton.subscribeWithPriority(9999, () => {
      this.closeCallBack();
    });
  }

  getAccounts() {
    this.clientService.getClientData(this.receivedParams);
  }


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopupFormComponent,
      event: ev,
      translucent: true,
      backdropDismiss: true,
    });
    return await popover.present();
  }

  private pageTitle = "Dashboard";
}
