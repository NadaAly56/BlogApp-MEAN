import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-email-confirmed',
  templateUrl: './email-confirmed.component.html',
  styleUrls: ['./email-confirmed.component.css']
})
export class EmailConfirmedComponent implements OnInit {
  token: string = this.route.snapshot.params['token']

  constructor(private userServices:UserService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.confirmEmail()
  }

  confirmEmail(){
    this.userServices.verifyEmail(this.token).subscribe()
  }
}
