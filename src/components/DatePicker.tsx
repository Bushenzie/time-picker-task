import Button from "./ui/Button";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { changeDateByDay, formatDate, isToday } from "../utils/dates";
import { useCalendar } from "../context/CalendarContext";

export default function DatePicker() {
    const {currentDate,setCurrentDate} = useCalendar();

    const onClickDecrement = () => {
        setCurrentDate((curr) => {
            return changeDateByDay(curr,-1);
        })
    }
    const onClickIncrement = () => {
        setCurrentDate((curr) => {
            return changeDateByDay(curr,1);
        })
    }

    return (
        <div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-2 text-sm justify-between">
            <Button
                className="col-span-2 lg:col-span-1 w-full text-sm"
                disabled={isToday(currentDate)}
                onClick={onClickDecrement}
            >
                <FiArrowLeft />
            </Button>
            <Button className="col-span-2 w-full text-xs font-extralight bg-utility-selectDate hover:bg-utility-selectDate/90">
                {formatDate(currentDate)}
            </Button>
            <Button className="col-span-2 w-full text-xs font-extralight" onClick={onClickIncrement}>
                {formatDate(changeDateByDay(currentDate,1))}
            </Button>
            <Button
                className="col-span-2 lg:col-span-1 w-full text-sm"
                onClick={onClickIncrement}
            >
                <FiArrowRight />
            </Button>
        </div>
    );
}
