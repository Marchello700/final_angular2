import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {ClusterHostDetailsService} from './ClusterHostDetailsService';

import {IReadOnlyService} from '../ReadOnlyService';

import {IClusterHostDetails} from '../../dtos/ClusterHostDetails';

export interface IClusterHostDetailsServiceFactory {
    create(clusterId: string): IReadOnlyService<IClusterHostDetails>;
}

@Injectable()
export class ClusterHostDetailsServiceFactory 
    implements IClusterHostDetailsServiceFactory {

    private _http: Http;

    constructor(http: Http) {
        this._http = http;
    }
        
    create(clusterId: string): IReadOnlyService<IClusterHostDetails> {
        let url: string = `GET /api/hosts${clusterId}`;

        //return new ClusterHostDetailsService(this._http, url);
        return null;
    }

}