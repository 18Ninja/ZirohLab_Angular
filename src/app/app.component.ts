import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	mArticles:Array<any>;
	mSources:Array<any>;
	mUsers:Array<any>;
	
	constructor(private newsapi:NewsApiService){
		console.log('app component constructor called');         
	}

	ngOnInit() {
        //load articles
	    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
		//load news sources
		this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);
		//load users
		this.newsapi.initUsers().subscribe(data=> this.mUsers = data['users']);	
    }


	searchArticles(source){
		console.log("selected source is: "+source);
		this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
	}

	
  
}
