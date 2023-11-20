import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'trackBy';

  users = [
    { id: 1, name: 'Ravi' },
    { id: 2, name: 'Bhoite' },
    { id: 3, name: 'Shreeraj' },
    { id: 4, name: 'Poonam' },
    { id: 5, name: 'Vihan' },
  ];

  refresh() {
    this.users = [
      { id: 1, name: 'Ravi' },
      { id: 2, name: 'Kisan' },
      { id: 3, name: 'Shreeraj' },
      { id: 4, name: 'Poonam' },
      { id: 5, name: 'Bhoite' },
    ];
  }

  trackByUser(index: number, item: any) {
    return item.id;
  }
}
