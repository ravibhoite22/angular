import { Component, OnInit, OnChanges, OnDestroy, Input, SimpleChange, DoCheck, ContentChild } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
})
export class ChildOneComponent implements OnInit, OnDestroy, DoCheck{

  @Input() userName: any;
  @ContentChild('fromParent',{static:true}) fromParent:any;
  constructor() {
    console.log('child one constructor called');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('child one ngOnIt called');
  }

  ngOnChanges(changes:SimpleChange): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('child one ngOnChanges called',changes);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('child one ngDoCheck called');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('child one ngAfterContentInit called');
    console.log('from parent',this.fromParent);
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('child one ngAfterContentChecked called');
  }

  ngOnDestroy(): void {
    console.log('child one ngOnDestroy called');
  }
}
