import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss'],
})
export class ParentOneComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  isShow: boolean = false;
  userName:string  = "";

  showChild() {
    this.isShow = !this.isShow;
  }
  constructor() {
    console.log('parent one constructor called');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('parent one ngOnIt called');
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log('parent one ngOnChanges called', changes);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('parent one ngDoCheck called');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('parent one ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('parent one ngAfterContentChecked called');
  }

  ngOnDestroy(): void {
    console.log('parent one ngOnDestroy called');
  }
}
