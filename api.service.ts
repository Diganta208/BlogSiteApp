import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject,BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {url} from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl : any= url
  constructor( public http : HttpClient) { }
  likeCount  = new BehaviorSubject<Number>(0)  

  getData(suburl : any){
    
    return this.http.get<any[]>(this.baseUrl+suburl).pipe(
      retry(1),
      catchError(this.errorResponse)
    )
  }

  errorResponse(err : HttpErrorResponse){
    
    let errorMessage = '';
    if (err.error instanceof ErrorEvent)  errorMessage = `An error occurred: ${err.error.message}`;
    else errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    
    return throwError(errorMessage);
  }

  checkPostIsLikedorNot( post: any)
  {
     let result=localStorage.getItem("likedPost")
    
     if(result) 
     {
       let likedPost=JSON.parse(result)
       let row=likedPost.find((res : any)=> {
         if(res.id==post.id && res.userId== post.userId)
         {
           console.log(res)
           return res
         }
       })
       if(row) return true
       else return false
     }
     else return false
  }

}
