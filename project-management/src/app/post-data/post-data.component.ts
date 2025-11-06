import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  constructor(private client: HttpClient ){

  }


  ngOnInit(): void {
    this.client.get<any[]>('https://jsonplaceholder.typicode.com/posts')
               .subscribe(data=>console.log(data));
  }


}
