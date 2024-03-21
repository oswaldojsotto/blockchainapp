export function timestampFormatter(timestamp: number) {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${hours}:${seconds}`;
}

// Example usage
const timestamp = 1710915851;
const formattedDatetime = timestampFormatter(timestamp);
console.log(`Timestamp ${timestamp} corresponds to ${formattedDatetime}`);