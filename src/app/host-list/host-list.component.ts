import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {ClusterDetailsService} from '../services/ClusterDetails/ClusterDetailsService';
import {ClusterHostDetailsService} from '../services/ClusterDetails/ClusterHostDetailsService';

import {IClusterDetails} from '../dtos/ClusterDetails';
import {IClusterHostDetails, ClusterHostDetails} from '../dtos/ClusterHostDetails';

@Component({
  moduleId: module.id,
  selector: 'host-list',
  templateUrl: 'host-list.component.html',
  styleUrls: ['host-list.component.css']
})
export class HostListComponent implements OnInit {

  private _service: ClusterDetailsService;

  private _hostService: ClusterHostDetailsService;

  clusterId: string;

  cluster: IClusterDetails;

  clusterHostDetails: IClusterHostDetails;

  clusterHostDetailsArray: IClusterHostDetails[];

  clusterHostDetails$: Observable<IClusterHostDetails[]>;

  private _router: Router;
  private _route: ActivatedRoute;

  constructor(service: ClusterDetailsService, hostService: ClusterHostDetailsService, route: ActivatedRoute, router: Router) {
    this._service = service;
    this._hostService = hostService;
    this._route = route;
    this._router = router;
    this.clusterHostDetailsArray = [];
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.clusterId = params['clusterId'];
      this.retrieveCluster();
      
      
    });
  }

  private retrieveCluster(): void {
    this._service.getItemById(this.clusterId).subscribe(cluster =>{
      this.cluster = cluster;
      this.retrieveClusterHostData();
    } );
  }

  private retrieveClusterHostData(): void {
   this.clusterHostDetails$ = this._hostService.getAllItems();
  }

  onNavigate(clusterHost: IClusterHostDetails): void {
    console.log(`Navigating to host: '${clusterHost.name}'...`);
    this._router.navigateByUrl(`clusters/${this.cluster.clusterId}/${clusterHost.hostId}`);
  }
}
