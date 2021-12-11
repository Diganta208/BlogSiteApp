import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

import { ApiService} from '../api.service'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  posts : any[]=[]
  title : string='All posts'
  constructor(private api: ApiService )
  {
    
  }


  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts()
  {
    this.api.getData('/posts').subscribe((res)=>{
      this.posts=res.sort((a,b)=>{
        if(a.title>b.title) return 1
        else if(a.title<b.title) return -1
        else return 0
      });
      console.log(this.posts)
      
    }) 
  }


}
