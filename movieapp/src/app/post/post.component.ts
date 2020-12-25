import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit { 
  Posts : any = [] 
    url = "https://jsonplaceholder.typicode.com/posts" ; 
  constructor(  private service: PostService) {    
  
      

  }

  ngOnInit(): void { 
    // this.http.get(this.url) 
    this.service.getPost()
    .subscribe(response => {
      // console.log(response); 
      this.Posts = response ; 
    })

  }  
  createPost(input: HTMLInputElement)
  {
     let post:any = { title: input.value} ; 

    //  this.http.post(this.url, JSON.stringify(post)) 
    this.service.createPost(post)
     .subscribe(response => { 
       console.log(response); 
       post.id = response ;  
       console.log(post); 
       this.Posts.splice(0,0,post) ; 
     })

  } 
  onUpdate(post){

    // this.http.patch(this.url+"/"+post.id,JSON.stringify(post.title = " new")) 
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response);
      
    })
  } 
  onDelete(post){
    
    // this.http.delete(this.url +"/"+post.id) 
    this.service.deletePost(post)
    .subscribe(response => {
      let index = this.Posts.indexOf(post); 
      this.Posts.splice(index,1,); 
    })
  }

  

}
