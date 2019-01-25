import { Observable } from 'rxjs';
import { NavControllerMock } from './nav-controller';
import { BaseMock } from '../base.mock';
export declare class AppMock extends BaseMock {
    private _navCtrl;
    private _viewObservable;
    constructor(_navCtrl?: NavControllerMock, _viewObservable?: Observable<any>);
    static instance(navCtrl?: NavControllerMock, viewObservable?: Observable<any>): any;
}
