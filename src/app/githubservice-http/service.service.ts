import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Repository } from '../repository'
import { User } from '../user';


@Injectable()
export class githubservice {

  repository: Repository;

  user: User;
  private username: string;
  items;

  constructor(private http: HttpClient) {
    this.user = new User(' ', ' ', ' ', ' ', 0, ' ');
    this.repository = new Repository(' ', ' ', ' ', ' ');


  }

  getgithubSearch(username) {
    interface ApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      email: string;
      public_repos: number;
      html_url: string;
    }

    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiKey + username + environment.apiKey).toPromise().then(githubsearch => {

        this.user.name = githubsearch.name;
        this.user.login = githubsearch.login;
        this.user.avatar_url = githubsearch.avatar_url;
        this.user.email = githubsearch.email;
        this.user.public_repos = githubsearch.public_repos;
        this.user.html_url = githubsearch.html_url;

        console.log(githubsearch);

        resolve();
      },
      );
    });

    return promise;
  }

  getRepository(username) {
    interface ApiResponse {
      name: string;
      homepage: string;
      description: string;
      html_url: string;
    }
    this.http.get<ApiResponse>(environment.apiKey + username + environment.apiKey).subscribe(response => {

      this.items = response;

    });
  }

}
