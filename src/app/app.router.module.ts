import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./intro/intro.component').then(mod => mod.IntroComponent)},
    {path: 'themes', loadComponent: () => import('./themes/themes.component').then(mod => mod.ThemesComponent)},
    {path: 'question', loadComponent: () => import('./question/question.component').then(mod => mod.QuestionComponent)},
];

export const AppRoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(
  routes,
  {}
);
