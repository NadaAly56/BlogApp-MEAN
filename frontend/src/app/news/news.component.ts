import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  token: any;
  data:any
  id:string = ''

  constructor(private _BlogService:BlogService){
    this.token = localStorage.getItem('token')
  }

  ngOnInit(): void {
    this.getAllBlogs()
  }

  getAllBlogs (){
    this._BlogService.getAllBlogs(this.token).subscribe(data=>{
      this.data = data.blogs
    })
  }
}
