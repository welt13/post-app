import { Component, OnInit } from '@angular/core';

import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {
  warning = false;
  userId?: number;
  private _posts: Post[] = [];

  get posts() {
    return [...this._posts];
  }

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(userId?: number) {
    this.warning = false;
    this.postService.getPosts(userId).subscribe(
      (posts) => {
        this._posts = posts;
      },
      () => {
        this.warning = true;
      }
    );
  }

  cleanUser() {
    this.userId = undefined;
    this.getPosts();
  }
}
