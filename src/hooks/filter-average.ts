import { timestampFormatter } from "./timestamp-formatter";


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
  
   
export const filterAverage = (price: number,  marketData: MarketDataProps[] ) => {
   const tolerance = Math.round(price) / 10

   const upperBound = tolerance + Math.round(price)
   const lowerBound = Math.round(price) - tolerance 

   const filteredData = marketData.filter(item => {
      return item.price >= lowerBound && item.price <= upperBound;
   });
   
   const simplifiedData = filteredData.map(item => {
      return {
          price: item.price.toFixed(2),
          time: timestampFormatter(item.time) 
      };
  });
   
   return simplifiedData
  
  }