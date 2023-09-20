import { Component,  OnInit } from '@angular/core';
import { SocketIoService } from '../services/socket.io.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../services/message.service';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  isOpen:boolean = false
  isChatOpen:boolean = false
  messages: any
  message: any
  receiver: string = ''
  token: any  = localStorage.getItem('token')
  socket = this.socketSerice.socket
  messageForm: FormGroup= new FormGroup({
    message: new FormControl('',[Validators.required])
  })
  constructor(private socketSerice: SocketIoService,
    private _Rute: ActivatedRoute,
    private _MessageService: MessageService,
    private dataSharing: DataSharingService) {
     }

  ngOnInit(): void {
    this.getAllMessages()
    ;
    this.dataSharing.getId().subscribe((data)=>{
      this.receiver = data
    })
    // this.receiver = this.dataSharing.id
  }
  openMessages(){
    if (this.isOpen == false) this.isOpen = true
    else this.isOpen = false
  }

  openChat(event:Event){
    event.stopPropagation()
    if (this.isChatOpen == false) this.isChatOpen = true
    else this.isChatOpen = false
  }

  sendMessage(){

    this.socket.emit('chat message', {message:this.messageForm.value.message,receiver:this.receiver,token:this.token})
    // this.messageService.sendMessage(this.receiver, this.token)
    // .subscribe((data)=>{
    //   console.log('data inside socket', data);

    // })
    this.getMessag()
  }
  getMessag(){
    this.socket.on('get message', (messages) => {
      console.log(messages);

      this.messages = messages
    });
  }

  getAllMessages(){
    this._MessageService.getMessages(this.token).subscribe((data)=>{
      this.messages = data.messages
      console.log('get Messags request', this.messages);

    })
  }
}
