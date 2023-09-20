import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';import { AdminComponent } from './admin/admin.component';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';import { NewsComponent } from './news/news.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { EmailConfirmedComponent } from './email-confirmed/email-confirmed.component';
import { DetailesComponent } from './detailes/detailes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotAllwoedComponent } from './not-allwoed/not-allwoed.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NewsComponent,
    UserProfileComponent,
    ChatComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    EmailConfirmedComponent,
    DetailesComponent,
    NavbarComponent,
    NotAllwoedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
