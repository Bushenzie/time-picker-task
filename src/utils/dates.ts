export function formatDate(date: Date) {
    const tommorow = new Date().getDate()+1 === date.getDate();
    const today = isToday(date)
    
    const prefix = today ? "Dnes" : tommorow ? "Zítra" : ""
    return `${prefix} ${date.getDate()}.${
        date.getMonth() + 1
    }.`;
}

export function changeDateByDay(date: Date, days: number) {
    return new Date(+date + 86400000 * days);
}

export function isToday(date: Date | number): boolean {
    const today = new Date();
    const comparedDate = typeof date === "number" ? new Date(date) : date;

    return (
        today.getDay() === comparedDate.getDay() &&
        today.getMonth() === comparedDate.getMonth() &&
        today.getFullYear() === comparedDate.getFullYear()
    );
}
