import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../models/post.model';
import { PostResponse } from '../interfaces/post.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'http://localhost:5000';
  private urlPath = 'api/v1/post';

  constructor(private http: HttpClient) { }

  createPost(postData: PostModel): Observable<PostResponse> {
    return this.http.post<PostResponse>(`${this.baseUrl}/${this.urlPath}`, postData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: true
    });
  }
}
