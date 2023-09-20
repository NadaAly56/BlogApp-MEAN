import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../services/blog.service';
import { MessageService } from '../services/message.service';
import { SocketIoService } from '../services/socket.io.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  token: any = localStorage.getItem('token')
  data:any
  id:string = ''
  type:String = 'article'
  isLoading:boolean = true


  @ViewChild('close') close:any
  @ViewChild('closeDelete') closeDelete:any

  blogForm:FormGroup = new FormGroup({
    title:new FormControl('', [Validators.required, Validators.minLength(5)]),
    description:new FormControl('', [Validators.required, Validators.minLength(20)]),
    quote:new FormControl('', [Validators.required, Validators.minLength(20)]),
    type:new FormControl('')
  })

  constructor(private _BlogService: BlogService,
     private socket: SocketIoService){
  }

  ngOnInit(): void {

    this.getUserBlogs()

  }

  getID(id:string) {
    this.id = id
    console.log(this.id);

  }

  setType(type:string){
    this.type = type
  }
  addBlog(){
    console.log(this.blogForm.value);
    this._BlogService.addBlog(this.blogForm.value, this.token).subscribe(data=>{
      console.log(data);
      if (data.msg == 'success') {
        this.close.nativeElement.click()
        this.getUserBlogs()
        console.log(this.blogForm.value);

      }
    })
  }

   getUserBlogs (){
    this.isLoading  = true
    this._BlogService.getUserBlogs(this.token).subscribe(data=>{
      this.data = data.blogs
      console.log(data);
      this.isLoading= false
    })
  }

  delteBlog(){
    this._BlogService.deleteBlog(this.token, this.id).subscribe(
      (data) => {
        if(data.msg === 'success')
        this.closeDelete.nativeElement.click()
        this.getUserBlogs()
      }
    )
  }


}
