import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponent } from './admin/admin.component';
import { routingCanActivateGuard } from './routing-service/routing-can-activate.guard';
import { ProductComponent } from './product/product.component';
import { routingCanActivateChildGuard } from './routing-service/routing-can-activate-child.guard';
import { routingCanDeactivateGuard } from './routing-can-deactivate.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    canActivateChild:[routingCanActivateChildGuard],
    children: [{ path: 'product', component: ProductComponent }],
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {
    path: 'admin',
    canDeactivate:[routingCanDeactivateGuard],
    component: AdminComponent,
    canActivate: [routingCanActivateGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
