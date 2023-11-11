import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'http-interceptor';

  constructor(private http: HttpClient) {}
  getUsers() {
    this.http.get("users").subscribe((res)=>{
      console.log("users ",res);
    })
  }
  getPosts() {
    this.http.get("posts").subscribe((res)=>{
      console.log("post ",res);
    })
  }
}
