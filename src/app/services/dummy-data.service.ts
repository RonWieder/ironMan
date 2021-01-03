import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  private readonly APP_ID: string = '5fefb0da3d3ae40863c2ed0f';
  private readonly BASE_URL: string = 'https://dummyapi.io/data/api/post';

  constructor(private http: HttpClient) { }

  getPostsForPage(limitNum: number = 20, pageNum: number = 1): Observable<Post[]> {
    const limit: string = limitNum.toString();
    const page: string = pageNum.toString();

    return this.http.get<Post[]>(this.BASE_URL, {
      headers: {
        'app-id': this.APP_ID
      },
      params: {
        limit,
        page
      }
    })
  }
}
