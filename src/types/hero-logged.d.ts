
interface HeroLoggedProps {
    balance:
      | { decimals: number; formatted: string; symbol: string; value: bigint }
      | undefined;
    address: `0x${string}` | undefined;
  }