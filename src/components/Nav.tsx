import Button from "./ui/Button";
import { FiUser, FiStar, FiClock, FiCalendar } from "react-icons/fi";

export default function Nav() {
    return (
        <div className="grid grid-cols-4 gap-2 w-full justify-between">
            <Button className="w-full py-6 px-10" disabled>
                <FiUser />
            </Button>
            <Button className="w-full py-6 px-10" disabled>
                <FiStar />
            </Button>
            <Button className="w-full py-6 px-10" disabled>
                <FiClock />
            </Button>
            <Button className="w-full py-6 px-10" >
                <FiCalendar />
            </Button>
        </div>
    );
}
