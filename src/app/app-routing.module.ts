import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NewsComponent} from "./news/news.component";
import {NewsDetailComponent} from "./news-detail/news-detail.component";
import {ActivateGuard} from "./guards/activate.guard";
import {RoleGuard} from "./guards/role.guard";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'news',
    component: NewsComponent,
    canActivate:[ActivateGuard, RoleGuard],
    // canActivateChild:[ActivateChildGuard],
    data: {
      accessRole: ['Guest']
    },
    children: [
      {
        path: 'detail/:id',
        component: NewsDetailComponent
      }
    ]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
