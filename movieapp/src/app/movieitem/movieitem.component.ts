import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movieitem',
  templateUrl: './movieitem.component.html',
  styleUrls: ['./movieitem.component.css']
})
export class MovieitemComponent implements OnInit {

  constructor() { }
      
  ngOnInit(): void {
  }   

  _movie : Movie ; 

  @Input()
   set  movie(moviepara: Movie){ 
     this._movie = moviepara ; 
           
   }  
   @Output() AddingEvent = new EventEmitter<Movie>(); 
   onAdd(movie: Movie){
    this.AddingEvent.emit(this.movie); 
   }

}
