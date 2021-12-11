import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  title = 'RideALike-demo-project';
  totalLikes: any
  allUser: any[]=[]
  constructor(private api: ApiService , private router: Router) { 

   
    this.api.likeCount.subscribe((res:any)=>{
      this.totalLikes=res
    })
  }

  ngOnInit(): void {
  }

  navigateToFavouritePage()
  {
    this.router.navigateByUrl('/favorites')
  }

  navigateToHomePage()
  {
    this.router.navigateByUrl('/posts')

  }

}
