import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private router:Router, private route:ActivatedRoute){

  }
  showProduct(){
    this.router.navigate(['product'],{relativeTo:this.route});
  }
}
