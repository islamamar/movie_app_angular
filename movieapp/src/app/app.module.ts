import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovielsitComponent } from './movielsit/movielsit.component';
import { MovieitemComponent } from './movieitem/movieitem.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MovieComponent } from './movie/movie.component'; 
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostComponent } from './post/post.component';
import { FollowersComponent } from './followers/followers.component';
import { NavabarComponent } from './navabar/navabar.component';  
import { HttpClientModule } from '@angular/common/http'; 
import { PostService } from './post.service';




@NgModule({
  declarations: [
    AppComponent,
    MovielsitComponent,
    MovieitemComponent,
    WatchlistComponent,
    MovieComponent,
    HomeComponent,
    ProfileComponent,
    NotfoundComponent,
    PostComponent,
    FollowersComponent,
    NavabarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,  
    HttpClientModule,
    RouterModule.forRoot([
        {
          path:  ' ' ,
        component : HomeComponent
       }, 
        {
          path:  'followers/:username ' ,
          component  : ProfileComponent 
        }, 
        {
          path:  'followers' , 
          component : FollowersComponent 
        }, 
        {
          path:  'posts' ,
          component : PostComponent 
        }, 
        {
          path:  '** ' , 
          component : NotfoundComponent 
        }, 
           

    ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
