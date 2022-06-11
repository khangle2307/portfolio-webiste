import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { WorksDetailPageComponent } from './pages/works-detail-page/works-detail-page.component';
import { WorksPageComponent } from './pages/works-page/works-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'post', component: PostPageComponent },
  { path: 'work', component: WorksPageComponent },
  { path: 'workDetail', component: WorksDetailPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
