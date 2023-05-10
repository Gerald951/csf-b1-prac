import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchReviewComponent } from './components/search-review.component';
import { MovieReviewListComponent } from './components/movie-review-list.component';
import { PostCommentComponent } from './components/post-comment.component';

const routes: Routes = [
  {path:'', component:SearchReviewComponent},
  {path:'movieList', component:MovieReviewListComponent},
  {path:'post/:movieTitle', component:PostCommentComponent},
  {path: "**", redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
