import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {DipInitializerService} from "./dip-initializer.service";

@Injectable()
export class DipResolve implements Resolve<any> {

    constructor(private dipInitializer: DipInitializerService) {}

    resolve(route: ActivatedRouteSnapshot) {
        if('headers' in this.dipInitializer.serviceHeaders){
            return true;
        }
        else{
            return this.dipInitializer.getTokenInfo();
        }
    }
}