import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component'
import {AuthorpageComponent} from './authorpage/authorpage.component'
import { FavouritepageComponent } from './favouritepage/favouritepage.component'
import { UndefinedRoutesComponent } from './undefined-routes/undefined-routes.component';
import { AllauthorsComponent } from './allauthors/allauthors.component';


const routes: Routes = [
  {path : '', component: HomepageComponent},
  {path : 'posts', component: HomepageComponent},
  {path : 'author/:authorid', component: AuthorpageComponent},
  {path : 'favorites', component: FavouritepageComponent},
  {
    path: 'authors', component: AllauthorsComponent
  },
  {
    path: "**", component: UndefinedRoutesComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
