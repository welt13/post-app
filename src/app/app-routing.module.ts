import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './post/pages/create-post/create-post.component';
import { DetailPostComponent } from './post/pages/detail-post/detail-post.component';
import { EditPostComponent } from './post/pages/edit-post/edit-post.component';
import { PostsComponent } from './post/pages/posts/posts.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts/crear',
    component: CreatePostComponent
  },
  {
    path: 'posts/editar/:idPost',
    component: EditPostComponent
  },
  {
    path: 'posts/:idPost',
    component: DetailPostComponent
  },
  {
    path: '**',
    redirectTo: 'posts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
