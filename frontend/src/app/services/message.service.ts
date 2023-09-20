import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { URL } from './baseUrl';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _HttpClient: HttpClient) { }

  sendMessage(message:any, id:string, token:string):Observable<any>{
    return this._HttpClient.post(`${URL}messages/`, {
      headers: new HttpHeaders({
        receiver:id,
        token:token
      })
    })
  }

  getMessages(token:string):Observable<any>{
    return this._HttpClient.get(`${URL}messages/`, {
      headers: new HttpHeaders({
        token: token
      })
    })
  }
}
