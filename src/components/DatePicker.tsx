import { useState } from "react";
import Button from "./ui/Button";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { changeDateByDay, formatDate, isToday } from "../utils/dates";

export default function DatePicker() {
    const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));

    const onClickDecrement = () => {
        setSelectedDate((curr) => {
            return changeDateByDay(curr,-1);
        })
    }
    const onClickIncrement = () => {
        setSelectedDate((curr) => {
            return changeDateByDay(curr,1);
        })
    }

    return (
        <div className="w-full grid grid-cols-6 gap-2 text-sm justify-between">
            <Button
                className="col-span-1 w-full text-sm"
                disabled={isToday(selectedDate)}
                onClick={onClickDecrement}
            >
                <FiArrowLeft />
            </Button>
            <Button className="col-span-2 w-full text-xs bg-utility-selectDate hover:bg-utility-selectDate/90">
                {formatDate(selectedDate)}
            </Button>
            <Button className="col-span-2 w-full text-xs" onClick={onClickIncrement}>
                {formatDate(changeDateByDay(selectedDate,1))}
            </Button>
            <Button
                className="col-span-1 w-full text-sm"
                onClick={onClickIncrement}
            >
                <FiArrowRight />
            </Button>
        </div>
    );
}
