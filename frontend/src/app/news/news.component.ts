import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  token: any;
  data:any
  id:string = ''

  constructor(private _BlogService:BlogService,
    private dataSharing: DataSharingService){
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

  getID(id:string){
    this.dataSharing.setId(id)
  }
}
