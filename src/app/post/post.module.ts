import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './pages/posts/posts.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { DetailPostComponent } from './pages/detail-post/detail-post.component';
import { FormPostComponent } from './components/form-post/form-post.component';
import { PostComponent } from './components/post/post.component';
import { CommentsModule } from '../comment/comment.module';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [
    PostsComponent,
    CreatePostComponent,
    EditPostComponent,
    DetailPostComponent,
    FormPostComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CommentsModule,
    UserModule
  ],
  exports: [PostsComponent]
})
export class PostModule {}
