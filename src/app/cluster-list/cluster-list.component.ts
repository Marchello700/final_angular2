import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

import {ClusterDetailsService} from '../services/ClusterDetails/ClusterDetailsService';

import {IClusterDetails} from '../dtos/ClusterDetails';

@Component({
  moduleId: module.id,
  selector: 'app-cluster-list',
  templateUrl: 'cluster-list.component.html',
  styleUrls: ['cluster-list.component.css']
})
export class ClusterListComponent implements OnInit {

  private _service: ClusterDetailsService;
  private _router: Router;

  clusters$: Observable<IClusterDetails[]>;

  constructor(service:ClusterDetailsService, router: Router) {
    this._service = service;
    this._router = router;
    this.clusters$ = service.getAllItems();
   }

  ngOnInit() {
  }

  onNavigate(cluster: IClusterDetails): void {
    console.log(`Navigating to cluster: '${cluster.name}'...`);

    this._router.navigateByUrl(`clusters/${cluster.clusterId}`);
  }

}