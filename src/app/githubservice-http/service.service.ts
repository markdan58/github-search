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