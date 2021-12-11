import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule }from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthorpageComponent } from './authorpage/authorpage.component';
import { FavouritepageComponent } from './favouritepage/favouritepage.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentareaComponent } from './contentarea/contentarea.component';
import { CommentsComponent } from './comments/comments.component';
import { UndefinedRoutesComponent } from './undefined-routes/undefined-routes.component';
import {MatSelectModule} from '@angular/material/select';
import { AllauthorsComponent } from './allauthors/allauthors.component';
import { TopbarComponent } from './topbar/topbar.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthorpageComponent,
    FavouritepageComponent,
    SidenavComponent,
    ContentareaComponent,
    CommentsComponent,
    UndefinedRoutesComponent,
    AllauthorsComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
