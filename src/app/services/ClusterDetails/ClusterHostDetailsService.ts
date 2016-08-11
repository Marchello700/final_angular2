import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {IReadOnlyService, ReadOnlyServiceBase} from '../ReadOnlyService';

import {IClusterHostDetails, ClusterHostDetails} from '../../dtos/ClusterHostDetails';

@Injectable()
export class ClusterHostDetailsService 
    extends ReadOnlyServiceBase<IClusterHostDetails> {

    constructor(http: Http) {
        super(http, "http://192.168.10.106/api/hosts/");
    }

    // constructor(http: Http, baseUrl: string) {
    //     super(http, baseUrl);        
    // }

    protected mapItem(data: any): IClusterHostDetails {
        return new ClusterHostDetails(data);
    }
}