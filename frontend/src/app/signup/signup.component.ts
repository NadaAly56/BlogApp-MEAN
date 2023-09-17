import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  available:boolean = true
  loading:boolean = false;
  redirectLink:string = 'http://localhost:4200/emailconfirmed/'
  constructor(private _UserService: UserService, private _Router: Router) {}
  ngOnInit(): void {
    $('#signUp').particleground();
  }
  signUpForm:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.pattern('[a-z]{4,}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required,Validators.minLength(10), Validators.maxLength(13)]),
  })

  addUser(){
    this.loading = true;
    console.log(this.loading);

    this._UserService.addUser(this.signUpForm.value, this.redirectLink).subscribe((d)=>{
      if(d.msg === 'success') {
        this._Router.navigate(['signIn'])
        this.available = false

      }
      else {
        this.available = false
      }
      this.loading = false;
      console.log(this.loading);
    });
  }
}
