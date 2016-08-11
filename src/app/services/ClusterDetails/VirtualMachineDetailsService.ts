import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {IReadOnlyService, ReadOnlyServiceBase} from '../ReadOnlyService';

import {IVirtualMachineDetails, VirtualMachineDetails} from '../../dtos/VirtualMachineDetails';

@Injectable()
export class VirtualMachineDetailsService 
    extends ReadOnlyServiceBase<IVirtualMachineDetails> {

    constructor(http: Http) {
        super(http, "http://192.168.10.106/api/virtualmachines/");
    }

    // constructor(http: Http, baseUrl: string) {
    //     super(http, baseUrl);        
    // }

    protected mapItem(data: any): IVirtualMachineDetails {
        return new VirtualMachineDetails(data);
    }
}