export function formatDate(date: Date) {
    const tommorowDate = changeDateByDay(date, 1);
    console.log(tommorowDate);
    return `${isToday(date) && "Dnes"} ${date.getDate()}.${
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
