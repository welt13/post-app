import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../interfaces/post.interface';
import { Comment } from 'src/app/comment/interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this._apiUrl}/posts/${id}`);
  }

  getPosts(userId?: number): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${this._apiUrl}/posts`,
      userId != null
        ? {
            params: {
              userId
            }
          }
        : undefined
    );
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this._apiUrl}/posts`, post);
  }

  editPost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this._apiUrl}/posts/${post.id}`, post);
  }

  showPostComments(idPost: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this._apiUrl}/posts/${idPost}/comments`);
  }
}
