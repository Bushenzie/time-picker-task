import { createContext, useContext, useEffect, useState } from "react";
import { TimeItem } from "../utils/types";
import {
    editRandomData,
    getRandomData,
} from "../utils/mock";

interface ICalendarContext {
    currentDate: Date;
    setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
    reserveItemSpace: (id: number | null) => void;
    data: TimeItem[];
    isLoading: boolean;
}

const CalendarContext = createContext<ICalendarContext>({
    currentDate: new Date(Date.now()),
    setCurrentDate: () => {},
    reserveItemSpace: () => {},
    data: [],
    isLoading: false,
});

export function CalendarContextProvider(props: { children: React.ReactNode }) {
    const [currentDate, setCurrentDate] = useState<Date>(new Date(Date.now()));
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<TimeItem[]>([]);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const response = await getRandomData(currentDate);
            setData(response);
            setLoading(false);
        }
        fetchData();
    }, [currentDate]);

    const reserveItemSpace = async (id: number | null) => {
        if(id === null) throw new Error("No ID Provided");

        const updatedValue = await editRandomData(currentDate, id as number,{capacity: data[id].capacity+1});

        setData((prev) => prev.map((item,index) => {
            return id === index ? updatedValue : item   
        }))
    };

    return (
        <CalendarContext.Provider
            value={{
                currentDate,
                reserveItemSpace,
                setCurrentDate,
                data,
                isLoading: loading,
            }}
        >
            {props.children}
        </CalendarContext.Provider>
    );
}

export function useCalendar() {
    const data = useContext(CalendarContext);
    return data;
}
