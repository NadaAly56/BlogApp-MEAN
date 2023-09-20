import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SocketIoService } from '../services/socket.io.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  messageForm: FormGroup= new FormGroup({
    message: new FormControl('',[Validators.required])
  })

  constructor(private messageService: MessageService
    , private _Rute: ActivatedRoute,
    private socketService: SocketIoService
    ){

  }


}
