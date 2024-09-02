/**
 * 
 * @param date Format
 * @returns formatted string to show based on provided date
 */
export function formatDate(date: Date) {
    const tommorowDate = new Date();
    const tommorow =
        tommorowDate.getDate() + 1 === date.getDate() &&
        tommorowDate.getMonth() === date.getMonth();
    const today = isToday(date);

    const prefix = today ? "Dnes" : tommorow ? "Zítra" : "";
    return `${prefix} ${date.getDate()}.${date.getMonth() + 1}.`;
}
/**
 * 
 * @param date Date to change
 * @param days How many days to add to provided date
 * @returns new Date based on the provided changes
 */
export function changeDateByDay(date: Date, days: number) {
    return new Date(+date + 86400000 * days);
}
/**
 * 
 * @param date Date to check
 * Function that returns bool based on date is representing today
 * @returns bool
 */
export function isToday(date: Date | number): boolean {
    const today = new Date();
    const comparedDate = typeof date === "number" ? new Date(date) : date;

    return (
        today.getDate() === comparedDate.getDate() &&
        today.getMonth() === comparedDate.getMonth() &&
        today.getFullYear() === comparedDate.getFullYear()
    );
}
