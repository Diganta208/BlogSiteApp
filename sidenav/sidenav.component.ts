import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiService} from '../api.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


  postContent : any
  isCommentEnables: boolean=false
  totalLikes: any
  likedPost :any[]=[]
  @Input() allposts : any
  @Input() title : any
  @Input() isAuthor : any 

  constructor( private api: ApiService , private router : Router) { 
 
  }

  ngOnInit(): void {

  }

  getPostById(id : number, user : number)
  { 
     this.postContent= this.allposts.find((res: any)=>res.id==id && res.userId==user)
  }

  getPostByauthorId(authorId : any)
  {
    this.router.navigateByUrl('/author/'+authorId)
    this.isAuthor=false
  }



  

}
