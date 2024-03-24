import moment from 'moment'

export function timestampFormatter(unixTimestamp: number) {
    // Convert the Unix timestamp to a Moment.js object
    const date = moment.unix(unixTimestamp);

    // Format the date and time
    const formattedDate = date.format('MM/DD - HH:mm:ss');

    // Return the formatted date and time
    return formattedDate;
}