import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './post/pages/create-post/create-post.component';
import { DetailPostComponent } from './post/pages/detail-post/detail-post.component';
import { EditPostComponent } from './post/pages/edit-post/edit-post.component';
import { PostsComponent } from './post/pages/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    pathMatch: 'full'
  },
  {
    path: 'crear',
    component: CreatePostComponent
  },
  {
    path: 'editar/:idPost',
    component: EditPostComponent
  },
  {
    path: 'detail/:idPost',
    component: DetailPostComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
