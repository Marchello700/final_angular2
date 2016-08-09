import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

import {DummyComputerDetailsService} from '../services/ComputerDetails/ComputerDetailsFacadeService';

import {ComputerDetailsViewModel} from '../viewModels/ComputerDetailsViewModel';

@Component({
  moduleId: module.id,
  selector: 'app-computer-list',
  templateUrl: 'computer-list.component.html',
  styleUrls: ['computer-list.component.css']
})
export class ComputerListComponent implements OnInit {

  private _service: DummyComputerDetailsService;
  private _router: Router;

  computers$: Observable<ComputerDetailsViewModel[]>;

  constructor(service:DummyComputerDetailsService, router: Router) {
    this._service = service;
    this._router = router;
    this.computers$ = service.getAllItems();
   }

  ngOnInit() {
  }

  onNavigate(computer: ComputerDetailsViewModel): void {
    console.log(`Navigating to '${computer.name}'...`);

    this._router.navigateByUrl(`computers/${computer.name}`);
  }

}
