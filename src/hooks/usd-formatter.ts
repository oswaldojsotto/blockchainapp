export function usdFormatter(amount: number): string {
    if (amount >= 1_000_000_000) {
        // convert to billions
        const formattedAmount = `$${(amount / 1_000_000_000).toFixed(2)}B`;
        return formattedAmount;
    } else if (amount >= 1_000_000) {
        // convert to millions
        const formattedAmount = `$${(amount / 1_000_000).toFixed(2)}M`;
        return formattedAmount;
    } else {
        // format regular USD 
        const formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
        return formattedAmount;
    }
}

