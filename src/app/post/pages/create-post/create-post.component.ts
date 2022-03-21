import { Component } from '@angular/core';
import { NewPost } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styles: [
    `
      a {
        width: 150px;
      }
    `
  ]
})
export class CreatePostComponent {
  private _userId: number | undefined;
  error = false;
  warning = false;
  success = false;

  constructor(private postService: PostService) {}

  selectUser(id?: number) {
    this._userId = id;
  }

  createPost(post: NewPost) {
    this.warning = false;
    this.success = false;
    this.error = false;
    if (this._userId != null) {
      this.postService
        .createPost({
          userId: this._userId,
          ...post
        })
        .subscribe(
          () => {
            this.success = true;
          },
          () => {
            this.error = true;
          }
        );
    } else {
      this.warning = true;
    }
  }
}
