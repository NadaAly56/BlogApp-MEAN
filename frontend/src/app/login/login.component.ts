import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string = '';
  loading:boolean = false;

  constructor(private _UserService: UserService, private _Router:Router) {}
  ngOnInit(): void {
    $('#signIp').particleground();
  }

  signInForm:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  verifyUser() {
    this.loading = true
    this._UserService.verifyUser(this.signInForm.value).subscribe((d)=>{

      if (d.msg === 'success')
      {
        if (!d.user.emailConfirmed) {
          this.msg = 'Email is not confirmed, please check your email and confirm it'
          console.log(d.emailConfirmed);

        }
        else {
          localStorage.setItem('token', d.token)
          this._Router.navigate(['user'])
        }
      }
      else this.msg = 'Email or password is not correct'
      this.loading=false
    })
  }
}
