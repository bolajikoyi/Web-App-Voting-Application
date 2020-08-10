import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles: Article[];
  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
  constructor() {
    this.articles = [
      new Article('Pump', 'http://pump.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Facebook', 'http://facebook.com', 1),
      new Article('Twitter', 'http://twitter.com', 3),
      new Article('Instagram', 'http://instagram.com', 2),
      new Article('Google', 'http://google.com', 1),
      new Article('Spotify', 'http://spotify.com', 3),
    ];
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
