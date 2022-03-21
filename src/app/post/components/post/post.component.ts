import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [
    `
      .card {
        cursor: pointer;
      }
    `
  ]
})
export class PostComponent {
  @Input() post!: Post;
}
