import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { PricingComponent } from './pricing.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home.component';
import { ErrorComponent } from './error.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    HomeComponent,
    ErrorComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    AdminMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
