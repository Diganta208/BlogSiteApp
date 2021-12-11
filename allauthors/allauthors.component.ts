import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-allauthors',
  templateUrl: './allauthors.component.html',
  styleUrls: ['./allauthors.component.css']
})
export class AllauthorsComponent implements OnInit {

  allposts : any[]=[]
  title : any = 'List of Author'
  constructor(private api: ApiService ) {
    this.getAllUser();
   }

  ngOnInit(): void {
  }

  getAllUser()
  {
     this.api.getData('/posts').subscribe((res)=>{
       res.map((obj)=>
       {
         if(!this.allposts.includes(obj.userId)) this.allposts.push(obj.userId)
       })
     })
  }

}
