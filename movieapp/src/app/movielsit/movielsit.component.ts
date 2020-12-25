import { Component, OnInit } from '@angular/core'; 
import { Movie } from '../movie';


@Component({
  selector: 'app-movielsit',
  templateUrl: './movielsit.component.html',
  styleUrls: ['./movielsit.component.css']
})
export class MovielsitComponent implements OnInit {
 
  tempList= [] ; 
  movie : Movie[]  =[
      new  Movie("film1", "image1"," genre1",2.55),
      new  Movie("film2", "image2"," genre2",2.55),
      new  Movie("film3", "image3"," genre3",2.55),
      new  Movie("film4", "image4"," genre4",2.55)
  ] ; 
  constructor() { }

  ngOnInit(): void {
  } 
  onAddParent(movie: Movie){
    let index = this.tempList.indexOf(movie);      
    if(index ==-1)
    this.tempList.push(movie); 
    // console.log(this.tempList);
  }


}
