import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { formatDates } from '../utils';

@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.css']
})
export class DetailesComponent {
  id:any;
  blog:any
  constructor(private _BlogService: BlogService, private _Route: ActivatedRoute){
    this.id = this._Route.snapshot.params['id']
    this.getBlog()
    console.log('id'+this.id);

  }

  getBlog(){
    const token = localStorage.getItem('token')
    this._BlogService.getBlog(token, this.id).subscribe(async data=>{
      this.blog = await data.blogs
      formatDates(this.blog)
      console.log(this.blog);

    })
  }
}
