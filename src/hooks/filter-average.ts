import { sortArrayByTime } from "./sort-by-time";
import { timestampFormatter } from "./timestamp-formatter";

//this function organizes the data that will be send to the graph
//because the source is inconsistent

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
   
   const dataSortedByTime = sortArrayByTime(simplifiedData);
   
   // Sometimes the data brings predictions on the last 2 elements of the list, we slice them
   // It will not be real time sometimes but the graphics will be more accurate
   return dataSortedByTime.slice(0, -2);
  
  }