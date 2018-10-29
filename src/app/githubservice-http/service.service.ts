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