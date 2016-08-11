import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {VirtualMachineDetailsService} from '../services/ClusterDetails/VirtualMachineDetailsService';

import {IVirtualMachineDetails, VirtualMachineDetails} from '../dtos/VirtualMachineDetails';

@Component({
  moduleId: module.id,
  selector: 'app-virtual-machine-details',
  templateUrl: 'virtual-machine-details.component.html',
  styleUrls: ['virtual-machine-details.component.css']
})
export class VirtualMachineDetailsComponent implements OnInit {

  private _vmService: VirtualMachineDetailsService;

  vmId: string;

  vmDetails: VirtualMachineDetails;

  private _router: Router;
  private _route: ActivatedRoute;

  constructor(vmService: VirtualMachineDetailsService, route: ActivatedRoute, router: Router) {
    this._vmService = vmService;
    this._route = route;
    this._router = router;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.vmId = params['vmId'];
      this.retrieveVm();
    });
  }

  private retrieveVm(): void {
    this._vmService.getItemById(this.vmId).subscribe(vmDetails =>{
      this.vmDetails = vmDetails;
    } );
  }
}