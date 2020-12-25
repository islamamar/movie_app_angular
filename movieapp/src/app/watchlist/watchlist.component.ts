import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor() { }
  _watchlist =[] ;  
  _movie: Movie ; 
  ngOnInit(): void {
  } 
  @Input()
  set newmovie(movielist : Movie[]){     
    this._watchlist=movielist ;     
 
  }
  

}
