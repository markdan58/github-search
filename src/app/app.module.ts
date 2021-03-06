import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubSearchFormComponent } from './github-search-form/github-search-form.component';
import {githubservice} from './githubservice-http/service.service';


@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    GithubSearchFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [githubservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
