import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DetailesComponent } from './detailes/detailes.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';
import {  authGuard } from './auth.guard';
import { NotAllwoedComponent } from './not-allwoed/not-allwoed.component';
import { NewsComponent } from './news/news.component';
import { EmailConfirmedComponent } from './email-confirmed/email-confirmed.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full', title: 'Home'},
  {path: 'home', component: HomeComponent, title: 'home'},
  {path: 'signIn', component: LoginComponent, title: 'signIn'},
  {path: 'signUp', component: SignupComponent, title: 'signUp'},
  {path: 'user', canActivate:[authGuard], component: AdminComponent, title: 'User'},
  {path: 'news', canActivate:[authGuard], component: NewsComponent, title: 'News'},
  {path: 'blogs/:id', canActivate:[authGuard], component: DetailesComponent, title: 'Blog'},
  {path: 'user/:id', canActivate:[authGuard], component: UserProfileComponent, title: 'Profile'},
  {path: 'emailconfirmed/:token',  component: EmailConfirmedComponent, title: 'email confirmed'},
  {path: 'notallowed', component: NotAllwoedComponent, title: 'Not Allowed'},
  {path: '**', component: ErrorComponent, title: 'Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
