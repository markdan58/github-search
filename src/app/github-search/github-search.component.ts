import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { githubservice } from "../githubservice-http/service.service";
import { Repository } from '../repository'


@Component({
  selector: "app-github-search",
  templateUrl: "./github-search.component.html",
  styleUrls: ["./github-search.component.css"],
  providers: [githubservice]
})
export class GithubSearchComponent implements OnInit {
  user: User;
  repository: Repository;

  constructor(
    private githubservice: githubservice,
    public repositoryService: githubservice
  ) {
    this.user = this.githubservice.user;
  }

  ngOnInit() { }
}




