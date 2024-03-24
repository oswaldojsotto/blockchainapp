interface DataItem {
    price: string;
    time: string;
}

export function transformDataToArray(data: DataItem[]): string[][] {
    // Initialize the transformed data array
    let transformedData: string[][] = [];

    // Iterate over each object in the original data
    data.forEach((item) => {
        // Create a new array with the price and the time as strings
        let newItem: string[] = [item.time, Number(item.price)];

        // Append the new array to the transformed data
        transformedData.push(newItem);
    });

    return transformedData;
}