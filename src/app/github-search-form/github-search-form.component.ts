import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { githubservice } from "../githubservice-http/service.service";

@Component({
  selector: "app-github-search-form",
  templateUrl: "./github-search-form.component.html",
  styleUrls: ["./github-search-form.component.css"],
  providers: [githubservice]
})
export class GithubSearchFormComponent implements OnInit {
  submitSearch(name) {
    this.githubservice.getgithubSearch(name.target.value);
    this.repositoryService.getRepository(name.target.value);
  }

  constructor(
    private githubservice: githubservice,
    private repositoryService: githubservice
  ) {}

  ngOnInit() {}
}


