import {Routes, RouterModule} from '@angular/router';
import {CarListComponent} from './components/car-list/car-list.component';
import {CarEditComponent} from './components/car-edit/car-edit.component';

const app_routes = [
  {
    path: '',
    redirectTo: 'car-list',
    pathMatch: 'full'
  },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  }
];

export const APP_ROUTES = RouterModule.forRoot(app_routes);
