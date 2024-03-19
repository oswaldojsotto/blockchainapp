interface TableProps {
    tableData: readonly Column<
      Column<{
        id: number;
        name: string;
        percent_change_24h: string;
        volume24: number;
        market_cap_usd: string;
        rank: number;
      }>
    >[];

    columns: { Header: string; accessor: string; }[]
  }