export function sortArrayByTime  (array: SortProps[])  {
    return array.slice().sort((a, b) => {
        return a.time.localeCompare(b.time);
    });
}