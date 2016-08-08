import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/reduce';

import {IReadOnlyService} from '../ReadOnlyService';
import {ComputerDetailsViewModel} from '../../viewModels/ComputerDetailsViewModel';

export class DummyComputerDetailsService 
    implements IReadOnlyService<ComputerDetailsViewModel> {
    
    private _computers: ComputerDetailsViewModel[];

    constructor() {
        this._computers = [];
    }

    getAllItems(): Observable<ComputerDetailsViewModel[]> {
        return Observable.from(this._computers)
            .reduce((array: ComputerDetailsViewModel[], item: ComputerDetailsViewModel) => {
                array.push(item);
                return array;
            }, []);
    }
}