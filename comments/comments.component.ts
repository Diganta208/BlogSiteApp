import { Component, OnInit , Input} from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() postid: any
  commment : any
  allComments :any
  showNoComments : any
  commentedPost :any
  thisPostComment: any[]=[]
  constructor(private api : ApiService) {
    let result=  localStorage.getItem("commentedPost")
    if(result)  this.commentedPost =JSON.parse(result)
  }

  getThisPostComment()
  {
    this.thisPostComment=this.commentedPost.filter((res : any)=> res.postId==this.postid)
    console.log(this.thisPostComment)
  }

  ngOnInit(): void {
   
  }

  ngOnChanges()
  {
   // this.showNoComments=false
    console.log(this.postid)
    this.getCommentsByPostId(this.postid)
    let result=  localStorage.getItem("commentedPost")
    if(result)  this.commentedPost =JSON.parse(result)
    this.getThisPostComment()
  }

  getCommentsByPostId(postid : any)
  {
    this.api.getData('/posts/'+postid+'/comments').subscribe((res)=>{
      this.allComments=res
      this.showNoComments=true
      console.log(this.allComments)
    })
  }

  postComment()
  {
    let newComment={
      postId: this.postid,
      email : 'you@gmail.com',
      comment : this.commment
    }
  
    this.commentedPost.push(newComment)
    this.commment=''
    this.getThisPostComment()
    localStorage.setItem("commentedPost", JSON.stringify(this.commentedPost))
  }

}
