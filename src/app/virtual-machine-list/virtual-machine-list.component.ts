import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {ClusterHostDetailsService} from '../services/ClusterDetails/ClusterHostDetailsService';
import {VirtualMachineDetailsService} from '../services/ClusterDetails/VirtualMachineDetailsService';

import {IVirtualMachineDetails, VirtualMachineDetails} from '../dtos/VirtualMachineDetails';
import {IClusterHostDetails, ClusterHostDetails} from '../dtos/ClusterHostDetails';

@Component({
  moduleId: module.id,
  selector: 'app-virtual-machine-list',
  templateUrl: 'virtual-machine-list.component.html',
  styleUrls: ['virtual-machine-list.component.css']
})
export class VirtualMachineListComponent implements OnInit {

  private _hostService: ClusterHostDetailsService;

  private _vmService: VirtualMachineDetailsService;

  clusterId: string;
  hostId: string;

  clusterHost: ClusterHostDetails;

  vmDetails$: Observable<IVirtualMachineDetails[]>;

  private _router: Router;
  private _route: ActivatedRoute;

  constructor(hostService: ClusterHostDetailsService, vmService: VirtualMachineDetailsService, route: ActivatedRoute, router: Router) {
    this._vmService = vmService;
    this._hostService = hostService;
    this._route = route;
    this._router = router;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.clusterId = params['clusterId'];
      this.hostId = params['hostId'];
      this.retrieveHost();
    });
  }

  private retrieveHost(): void {
    this._hostService.getItemById(this.hostId).subscribe(hostDetails =>{
      this.clusterHost = hostDetails;
      this.retrieveVMData();
    } );
  }

  private retrieveVMData(): void {
   this.vmDetails$ = this._vmService.getAllItems();
  //  this.vmDetails$.subscribe(element =>
  //     element.filter();

  //  );
  }

  onNavigate(vm: IVirtualMachineDetails): void {
    console.log(`Navigating to vm: '${vm.name}'...`);
    this._router.navigateByUrl(`clusters/${this.clusterId}/${this.hostId}/${vm.virtualMachineId}`);
  }
}