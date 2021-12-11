import { Component } from '@angular/core';
import { ApiService} from './api.service'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private api: ApiService , private router: Router)
  {
    localStorage.setItem("commentedPost", JSON.stringify([]))
    localStorage.setItem("likedPost",JSON.stringify([]))
  }

}
