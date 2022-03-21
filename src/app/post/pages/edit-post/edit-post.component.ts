import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user/interfaces/user.interface';
import { UserService } from 'src/app/user/services/user.service';
import { NewPost, Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styles: [
    `
      a {
        width: 150px;
      }
    `
  ]
})
export class EditPostComponent implements OnInit {
  error = false;
  success = false;
  user!: User;
  private _post: Post = {
    title: '',
    body: '',
    userId: 0
  };

  get post() {
    return this._post;
  }

  constructor(
    private postService: PostService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ idPost }) => {
      this.postService.getPost(idPost).subscribe((post) => {
        this._post = post;
        this.userService
          .getUser(this._post.userId)
          .subscribe((user) => (this.user = user));
      });
    });
  }

  editPost(post?: NewPost) {
    this.success = false;
    this.error = false;
    this.postService
      .editPost({
        ...this._post,
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
  }
}
