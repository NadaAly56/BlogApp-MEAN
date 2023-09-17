import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { URL } from './baseUrl';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient:HttpClient) { }

  addUser(data:any, link:string):Observable<any>{
    return this._HttpClient.post(URL+'users/signUp',data, {
      headers: new HttpHeaders({
        redirectLink: link
      })
    })
  }
  verifyEmail(data:string):Observable<any> {
    return this._HttpClient.get(`${URL}users/verify/${data}`)
  }
  verifyUser(data:any):Observable<any>{
    return this._HttpClient.post(URL+'users/signIn', data)
  }


}
