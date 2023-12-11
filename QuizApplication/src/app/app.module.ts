import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './MyComponent/list-user/list-user.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { UserService } from './Service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
