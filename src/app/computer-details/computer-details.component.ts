import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {DummyComputerDetailsService} from '../services/ComputerDetails/ComputerDetailsFacadeService';

import {ComputerDetailsViewModel} from '../viewModels/ComputerDetailsViewModel';

@Component({
  moduleId: module.id,
  selector: 'computer-details',
  templateUrl: 'computer-details.component.html',
  styleUrls: ['computer-details.component.css']
})
export class ComputerDetailsComponent implements OnInit {

  private _service: DummyComputerDetailsService;

  computerId: string;

  computer: ComputerDetailsViewModel;

  private _router: Router;
  private _route: ActivatedRoute;

  constructor(service: DummyComputerDetailsService, route: ActivatedRoute, router: Router) {
    this._service = service;
    this._route = route;
    this._router = router;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.computerId = params['computerId'];

      this.retrieveComputer();
    });
  }

  private retrieveComputer(): void {
    this._service.getItemById(this.computerId).subscribe(computer => this.computer = computer);
  }
}
