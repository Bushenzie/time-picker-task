import Button from "./ui/Button";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function DatePicker() {
    return (
        <div className="w-full grid grid-cols-6 gap-2 text-sm justify-between">
            <Button className="col-span-1 w-full text-sm">
                <FiArrowLeft />
            </Button>
            <Button className="col-span-2 w-full text-xs">
                Dnes 4.4.
            </Button>
            <Button className="col-span-2 w-full text-xs">
                Zítra 5.4.
            </Button>
            <Button className="col-span-1 w-full text-sm">
                <FiArrowRight />
            </Button>
        </div>
    );
}
