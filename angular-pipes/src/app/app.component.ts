import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-pipes';

  amount = 2.175;
  channelName = 'AngularStudy';
  mark = 2.8945;
  totalParentage = 0.8;
  today = new Date();
  promiseResult: any;
  searchKey = "App"
  mobiles = ["Apple iphone 12","AppleIphone13","AppleIp12","S22","S23","A12"];

  
  public promise = new Promise((resolve, reject) => {
    resolve('Promise data');
  });

  public observable = new Observable((observer)=>{
      observer.next('Observer data');
  })

  update(){
    this.mobiles.push("App phoneXR");
    console.log(this.mobiles);
  }
}
