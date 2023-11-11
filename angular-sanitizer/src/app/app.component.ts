import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dom-sanitizer';
  searchKey: any;
  baseUrl: any;

  constructor(private domSanitizer: DomSanitizer) {}

  search(searchInput: any) {
    //this will allow to insert html element/script in search key
    this.searchKey = this.domSanitizer.bypassSecurityTrustHtml(
      searchInput.value
    );
    //this will throw an error
    //this.searchKey = searchInput.value;
  }
  loadUrl() {
    //this will throw an error
    //this.baseUrl = 'https://www.google.com';
    //this will allow to load url
    this.baseUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com'
    );
  }
}
