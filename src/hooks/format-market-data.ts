import { timestampFormatter } from "@/src/hooks/timestamp-formatter";
import { usdFormatter } from "@/src/hooks/usd-formatter";

export function formatMarketData(data: { price_usd: number; time:number}[]) {
    return data.map(item => ({ price: usdFormatter(item.price_usd), time: timestampFormatter(item.time) }));
  }