import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _HttpClient: HttpClient) { }
  addBlog(data:any, token:string): Observable<any>{
    return this._HttpClient.post(URL+'blogs/add', data, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'token': token
      })
    })
  }

  getAllBlogs(token:string): Observable<any>{
    return this._HttpClient.get(URL+'blogs', {
      headers: new HttpHeaders({
        'token': token
      })
    })
  }
  getUserBlogs(token:string): Observable<any>{
    return this._HttpClient.get(URL+'blogs/userblogs', {
      headers: new HttpHeaders({
        'token': token
      })
    })
  }

  getBlog(token:any, id:any): Observable<any>{
    return this._HttpClient.get(URL+'blogs/'+id, {
      headers: new HttpHeaders({
        'token': token
      })
    })
  }

  deleteBlog(token:string, id:string): Observable<any>{
    return this._HttpClient.delete(URL+'blogs/delete/'+id, {
      headers: new HttpHeaders({
        token: token
      })
    })
  }
}


