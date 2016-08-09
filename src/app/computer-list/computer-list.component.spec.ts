/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ComputerListComponent } from './computer-list.component';

describe('Component: ComputerList', () => {
  it('should create an instance', () => {
    let component = new ComputerListComponent();
    expect(component).toBeTruthy();
  });
});
