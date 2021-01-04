import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Post } from '../model/post';
import { Posts } from '../model/posts';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  private readonly APP_ID: string = '5ff22478ba78081ef42a5b4f';
  private readonly BASE_URL: string = 'https://dummyapi.io/data/api/';


  constructor(private http: HttpClient) { }

  fetch(limitNum: number = 20, pageNum: number = 0, tag: string = ""): Observable<Posts> {
    const limit: string = limitNum.toString();
    const page: string = pageNum.toString();

    const url = this.BASE_URL + (tag.length ? `tag/${tag}/post` : 'post');

    return this.http.get<Posts>(url, {
      headers: {
        'app-id': this.APP_ID
      },
      params: {
        limit,
        page
      }
    }).pipe(map((data) =>
      ({ ...data, total: Math.ceil(data.total / limitNum) })
    ))
  };

}
