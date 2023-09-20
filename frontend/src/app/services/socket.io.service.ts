import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  socket= io('http://localhost:3300/')
  constructor() {
    // this.socket = io('http://localhost:3300/')
    // // this.socket = io('http://localhost:3300/')
    console.log('Socket.io connected:', this.socket.connected);
   }
}
