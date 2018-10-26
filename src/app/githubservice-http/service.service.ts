import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { githubclass } from '../github'



@Injectable()
export class QuoteRequestService {

  person: githubclass;

  constructor(private http: HttpClient) {
    this.person = new githubclass("","",0);
  }

  githubRequest(username) {

    interface ApiResponse {
      username: string;
      profilephoto: string;
      repositories: number

    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>("https://api.github.com/users/" + username +"?access_token=" + environment.apiKey)
        .toPromise()
        .then(response => {
          this.person.username = response.username;
          this.person.profilephoto = response.profilephoto;
          this.person.repositories = response.repositories;

          resolve();
        });
    })

    return promise
  }
}