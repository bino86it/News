import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any[] = [];
  newsError: boolean = false;
  ricerca:string="";

  constructor(public authService: AuthService, private newsService: NewsService) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.newsService.getNews().subscribe(
        (data: any) => {
          this.news = data.articles;
        },
        error => {
          console.error(error);
          this.newsError = true;
        }
      );
    }
  }

}
