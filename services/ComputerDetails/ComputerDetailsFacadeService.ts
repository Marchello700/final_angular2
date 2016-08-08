import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/from';

import {IReadOnlyService} from '../ReadOnlyService';
import {ComputerDetailsViewModel} from '../../viewModels/ComputerDetailsViewModel';

export class DummyComputerDetailsService {
    
    computers: ComputerDetailsViewModel[];

    constructor() {
        let computer1 = new ComputerDetailsViewModel();

        computer1.name = "dummy1";
        computer1.ipAddress = "127.0.0.1";
        computer1.memory = 9000;
        computer1.user = "me";

        this.computers = [computer1, computer1, computer1];        
    }

    getAllItems(): Observable<ComputerDetailsViewModel[]> {
        return Observable.from([this.computers]);
    }
}