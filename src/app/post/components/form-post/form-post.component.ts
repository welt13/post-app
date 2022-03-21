import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewPost, Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styles: [
    `
      textarea {
        height: 200px;
      }
    `
  ]
})
export class FormPostComponent {
  @Input() post: Post = {
    title: '',
    body: '',
    userId: 0
  };
  @Output() onSubmitForm: EventEmitter<NewPost> = new EventEmitter();

  savePost() {
    this.onSubmitForm.emit({
      title: this.post.title,
      body: this.post.body
    });
  }
}
