import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-github-search-form',
  templateUrl: './github-search-form.component.html',
  styleUrls: ['./github-search-form.component.css']
})
export class GithubSearchFormComponent implements OnInit {

  username = "";
  
  constructor(private http: HttpClient) { }

  onsubmitsearch(){
    
  }


  ngOnInit() {
  }

}
