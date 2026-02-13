import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { Contact } from './pages/contact/contact';
import { Blog } from './pages/blog/blog';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'aboutUs',
    component: AboutUs,
  },
  {
    path: 'contactUs',
    component: Contact,
  },
  {
    path: 'blog',
    component: Blog,
  },
];
