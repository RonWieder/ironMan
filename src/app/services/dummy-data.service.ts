import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  private readonly APP_ID: string = '5fefb0da3d3ae40863c2ed0f';
  private readonly BASE_URL: string = 'https://dummyapi.io/data/api/post';

  constructor(private http: HttpClient) { }

  private getDataFor(limitNum: number = 20, pageNum: number = 0): Observable<{}> {
    const limit: string = limitNum.toString();
    const page: string = pageNum.toString();

    return this.http.get<{}>(this.BASE_URL, {
      headers: {
        'app-id': this.APP_ID
      },
      params: {
        limit,
        page
      }
    })
  };

  getPostsForPage(limitNum: number = 20, pageNum: number = 0): Observable<Post[]> {
    return this.getDataFor(limitNum, pageNum).pipe(
      map(res => res['data'])
    )
  }

  getNumOfPages(limitNum: number = 20, pageNum: number = 0): Observable<number> {
    return this.getDataFor(limitNum, pageNum).pipe(
      map(res => res['total']),
      tap(total => Math.ceil(total / limitNum))
    )
  }

}
