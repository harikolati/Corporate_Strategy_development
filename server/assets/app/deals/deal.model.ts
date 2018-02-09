export class Deal{

constructor(public transactionType : string,
            public transactionStage : string,
            public dealCode : string,
            public dealType : string,
            public dealMarketSegment : Array<string>,
            public targetMarketSegment : Array<string>,
            public dealSize : string, 
            public purchasePrice : string
){}
}