import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service'

@Component({
  selector: 'app-favouritepage',
  templateUrl: './favouritepage.component.html',
  styleUrls: ['./favouritepage.component.css']
})
export class FavouritepageComponent implements OnInit {

  posts : any[]=[]
  title : string=''

  constructor( private api: ApiService) { 
    this.title ='Posts you liked'
    let result=  localStorage.getItem("likedPost")
    if(result)  this.posts =JSON.parse(result)
  }

  ngOnInit(): void {
  }


}
