import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-authorpage',
  templateUrl: './authorpage.component.html',
  styleUrls: ['./authorpage.component.css']
})
export class AuthorpageComponent implements OnInit {

  posts : any[]=[]
  authorId: any 
  title : string=''

  constructor(private api: ApiService, public route : ActivatedRoute )
  {
    this.route.params.subscribe((param)=>{
      if(param.authorid)
      {
        this.authorId= param.authorid
        console.log(param.authorid)
        this.getAllPostsByAuthorId(param.authorid)
      }
    })
    
  }

  ngOnInit(): void {
  }

  getAllPostsByAuthorId(authorId :any)
  {
    console.log(authorId)
    this.title=`Post by Author ${authorId}`
    this.api.getData('/posts?userId='+authorId).subscribe((res)=>{
      this.posts=res.sort((a,b)=>{
        if(a.title>b.title) return 1
        else if(a.title<b.title) return -1
        else return 0
      });
      console.log(this.posts)
      
    }) 
  }
}
