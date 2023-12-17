import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey="6604472052964e2ab8e33a3c1d303c83";
  private ricerca="";
  private apiUrl = `https://newsapi.org/v2/everything?q=${this.ricerca}&from=2023-12-17&sortBy=popularity&apiKey=${this.apiKey}`;

  constructor(private http: HttpClient,private authService: AuthService) { }

  getNews(): Observable<any> {
    const apiKey = this.authService.getApiKey();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${apiKey}`);
    return this.http.get(`${this.apiUrl}/news`, { headers });
  }

}
