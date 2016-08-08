import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

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

  computers: ComputerDetailsViewModel[];

  computers$: Observable<ComputerDetailsViewModel[]>;

  constructor(service: DummyComputerDetailsService) {
    this._service = service;
    this.computers = [];
    this.computers = this._service.computers;

    this.computers$ = this._service.getAllItems();
   }

  ngOnInit() {
  }
}
