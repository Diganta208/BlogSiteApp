import { Component, OnInit, Input } from '@angular/core';
import { ApiService} from '../api.service'

@Component({
  selector: 'app-contentarea',
  templateUrl: './contentarea.component.html',
  styleUrls: ['./contentarea.component.css']
})
export class ContentareaComponent implements OnInit {

  @Input() posts : any[]=[]
  @Input() postContent : any
  isCommentEnables: boolean=false
  totalLikes: any
  likedPost :any[]=[]
  isLiked:any
  

  constructor(private api: ApiService) {
    let result=  localStorage.getItem("likedPost")
    if(result)  this.likedPost =JSON.parse(result)
    this.api.likeCount.subscribe((res:any)=>{
      this.totalLikes=res
    })
    
   }

  ngOnInit(): void {
  }

  ngOnChanges()
  {
    if(this.postContent) this.isLiked= this.api.checkPostIsLikedorNot(this.postContent)
    this.isCommentEnables= false
  }

  likeAPost(post: any)
  {
     this.likedPost.push(post);
     this.isLiked= true
     localStorage.setItem("likedPost", JSON.stringify(this.likedPost))
     this.api.likeCount.next(this.totalLikes+1)
  }

  unlikeAPost(post: any)
  {
     let index= this.likedPost.findIndex((res)=>res.id==post.id && res.userId== post.userId)
     this.likedPost.splice(index,1);
     this.isLiked= false
     localStorage.setItem("likedPost", JSON.stringify(this.likedPost))
     this.api.likeCount.next(this.totalLikes-1)
  }

}
