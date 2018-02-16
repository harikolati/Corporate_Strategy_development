import { Deal } from './Deal';
import { Http, Response, Headers } from "@angular/http";
import { Injectable} from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class DealService{

constructor(private http: Http) {}

    private deals : Deal[]=[];
    
    getDealDetails(url:string){
    return this.http.get(url)
            .map((response: Response) => {
                const deals = response.json().obj;

                let transformedDeals: Deal[] = [];
                for (let deal of deals.activeDeals) {
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
                return transformedDeals;
            })
            .catch((error: Response) => {console.log(error)
             console.log(error);
                          return Observable.throw(error);});
    }
}
