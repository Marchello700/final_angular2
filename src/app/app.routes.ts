import {provideRouter, Route} from '@angular/router';

import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {ComputerListComponent} from './computer-list/computer-list.component';
import {ComputerDetailsComponent} from './computer-details/computer-details.component';

import {ClusterListComponent} from './cluster-list/cluster-list.component';
import {HostListComponent} from './host-list/host-list.component';
import {VirtualMachineListComponent} from './virtual-machine-list/virtual-machine-list.component';
import {VirtualMachineDetailsComponent} from './virtual-machine-details/virtual-machine-details.component';


export const routes: Route[] = [
  { path: '',   component: WelcomePageComponent },
  { path: 'computers', component: ComputerListComponent },
  { path: 'computers/:computerId', component: ComputerDetailsComponent },

  { path: 'clusters', component: ClusterListComponent },
  { path: 'clusters/:clusterId', component: HostListComponent },
  { path: 'clusters/:clusterId/:hostId', component: VirtualMachineListComponent },
  { path: 'clusters/:clusterId/:hostId/:vmId', component: VirtualMachineDetailsComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];