import { timestampFormatter } from "@/hooks/timestamp-formatter";
import { usdFormatter } from "@/hooks/usd-formatter";

export function formatMarketData(data: { price_usd: number; time:number}[]) {
    return data.map(item => ({ price: usdFormatter(item.price_usd), time: timestampFormatter(item.time) }));
  }