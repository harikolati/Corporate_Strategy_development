import { Deal } from './Deal';
import { Http, Response, Headers } from "@angular/http";
import { Injectable} from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
@Injectable()
/**
 * @class: DealService
 * Description : To get deal data thru service
 */

export class DealService{
constructor(private http: Http) {}
    private deals : Deal[]=[];
    /**
     * @function : To get active deal data thru service
     * @returns {Deal[]} transformedDeals
     */
   getDealDetails(): Observable<Deal[]> {
    return  this.http.get('http://localhost:3000/deals')
            .map((response: Response) => {
                const deals = response.json().obj;
                let transformedDeals: Deal[] = [];
                for (let deal of deals) {
                    console.log(deal);
                    transformedDeals.push(new Deal(
                     deal.transactionType,
                     deal.transactionStage,
                     deal.dealCode,
                     deal.dealType,
                     deal.marketSegment,
                     deal.targetMarketSegment,
                     deal.targetCompanyName,
                     deal.purchasePrice));
                }
                this.deals = transformedDeals;
                return transformedDeals;
            })
            .catch((error: Response) => {console.log(error)
             console.log(error);
                          return Observable.throw(error);});
    }

    
}
