import { useEffect, useState } from "react";
import { useCalendar } from "../context/CalendarContext";
import Button from "./ui/Button";

export default function TimesList() {
    const { data, reserveItemSpace, currentDate, isLoading } = useCalendar();
    const [selected, setSelected] = useState<string | null>(null);

    useEffect(() => {
        setSelected(null);
    }, [data]);

    const onClickItem = (id: string) => {
        setSelected((prev) => {
            return prev === id ? null : id;
        });
    };

    const onClickReserve = () => {
        reserveItemSpace(Number(selected?.split("#")[1] as string));
    };

    return (
        <div>
            <div className="grid grid-cols-3 h-full gap-2">
                {isLoading ? (
                    <h1 className="text-center col-span-3">Loading...</h1>
                ) : data.length === 0 ? (
                    <h1 className="text-center col-span-3">No items found.</h1>
                ) : (
                    <>
                        {data.map((time, index) => {
                            const id = `${currentDate.toISOString()}#${index}`;
                            return (
                                <Button
                                    key={id}
                                    onClick={() => onClickItem(id)}
                                    className={`w-full text-sm bg-transparent border-theme-secondary border-2 font-extralight ${
                                        selected === id &&
                                        "bg-utility-selectTime hover:bg-utility-selectTime/90"
                                    }`}
                                    disabled={
                                        time.capacity >= time.originalCapacity
                                    }
                                >
                                    <div className="capacity absolute top-1 left-2 text-xs">
                                        ({time.capacity}/{time.originalCapacity}
                                        )
                                    </div>
                                    <span>{time.time}</span>
                                </Button>
                            );
                        })}
                        {selected !== null && (
                            <Button
                                className="col-span-3 text-xs w-full"
                                onClick={onClickReserve}
                            >
                                Reserve
                            </Button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
