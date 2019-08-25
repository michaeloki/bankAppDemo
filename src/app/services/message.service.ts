import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoadingController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public idToken = "";
  public localId = "";
  public refreshToken = "";
  loading:any;
  

  constructor(public loadingCtrl: LoadingController,public alertCtrl: AlertController,) { }
  
  private subject = new Subject<any>();
 
  public sendMessage(message: string) {
      this.subject.next({ text: message });
  }

  public clearMessage() {
      this.subject.next();
  }

  public saveAccount(message: any) {
    this.subject.next(message);
  }

  public getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

  public getAccount(): Observable<any> {
    return this.subject.asObservable();
  }

  public async Loader(msg) {
    this.loading = await this.loadingCtrl.create({
      message: msg
    });
    await this.loading.present();
  }

  public async stopLoader() {
    await this.loading.dismiss();
  }

  public async presentAlert(message,title) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  public getAccountInfo(key) {
    var localObject = JSON.parse(localStorage.getItem(key));
    return localObject;
  }
}
