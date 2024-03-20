type CurrencyListProps = {
  data: {}[]
}

type TableProps = {
  data: {}[]
  columns: []
}

type RowProps = {
  nameid: string;
  symbol: string;
  name: string;
  id: string;
  percent_change_24h: string;
  volume24: number;
  market_cap_usd: number;
}