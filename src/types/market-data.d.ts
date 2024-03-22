interface MarketDataProps { 
    name: string;
    base: string;
    quote: string;
    price: number;
    price_usd: number;
    volume: number;
    volume_usd: number;
    time: number;
 }[]
   

 interface SortProps { price: string; time: string; }[]