import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PricingComponent} from './pricing.component';
import { HomeComponent} from './home.component';
import { AdminMenuComponent} from './admin/admin-menu/admin-menu.component';
import { ErrorComponent} from './error.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path:'pricing', component:PricingComponent},
  { path:'home', component:HomeComponent },
  { path:'admin/admin-menu', component:AdminMenuComponent },
  { path:'**' , component:ErrorComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
