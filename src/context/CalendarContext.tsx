import { createContext, useContext, useState } from "react";

type TimeItem = {
    time: string;
    capacity: number;
    originalCapacity: number;
};

interface ICalendarContext {
    currentDate: Date;
    setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
    // getCurrentDayString: () => string
    data: TimeItem[];
}

const CalendarContext = createContext<ICalendarContext>({
    currentDate: new Date(Date.now()),
    setCurrentDate: () => {},
    // getCurrentDayString: () => "",
    data: [],
});

export function CalendarContextProvider(props: { children: React.ReactNode }) {
    const [currentDate, setCurrentDate] = useState<Date>(new Date(Date.now()));
    const [data, setData] = useState<TimeItem[]>([]);


    return (
        <CalendarContext.Provider value={{ currentDate,setCurrentDate,data }}>
            {props.children}
        </CalendarContext.Provider>
    );
}

export function useCalendar() {
    const data = useContext(CalendarContext);
    return data;
}
