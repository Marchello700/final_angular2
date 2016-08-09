import {provideRouter, Route} from '@angular/router';

import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {ComputerListComponent} from './computer-list/computer-list.component';
import {ComputerDetailsComponent} from './computer-details/computer-details.component';

export const routes: Route[] = [
  { path: '',   component: WelcomePageComponent },
  { path: 'computers', component: ComputerListComponent },
  { path: 'computers/:computerId', component: ComputerDetailsComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];