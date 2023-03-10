import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./feature/about/about.module').then((m) => m.AboutModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./feature/projects/projects.module').then((m) => m.ProjectsModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./feature/resume/resume.module').then((m) => m.ResumeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
