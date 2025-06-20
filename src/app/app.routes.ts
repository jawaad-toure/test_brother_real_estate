import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { RealEstateList } from './components/real-estate/real-estate-list/real-estate-list';
import { NotFound } from './components/shared/not-found/not-found';
import { RealEstatePreview } from './components/real-estate/real-estate-preview/real-estate-preview';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'realestates',
    component: RealEstateList,
  },
  {
    path: 'realestates/:id',
    component: RealEstatePreview,
  },
  {
    path: 'realestates/add',
    component: RealEstatePreview,
  },
  {
    path: '**',
    component: NotFound,
  },
];
