import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/comment/interfaces/comment.interface';
import { User } from 'src/app/user/interfaces/user.interface';
import { UserService } from 'src/app/user/services/user.service';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styles: [
    `
      a {
        width: 150px;
      }
    `
  ]
})
export class DetailPostComponent implements OnInit {
  private _comments: Comment[] = [];
  private _user: User | null = null;
  private _post!: Post;

  get comments() {
    return [...this._comments];
  }

  get user() {
    return this._user;
  }

  constructor(
    private userService: UserService,
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ idPost }) => {
      this.postService.getPost(idPost).subscribe((post) => {
        this._post = post;
        this.userService
          .getUser(this._post.userId)
          .subscribe((user) => (this._user = user));
      });
      this.postService
        .showPostComments(idPost)
        .subscribe((comments) => (this._comments = comments));
    });
  }
}
