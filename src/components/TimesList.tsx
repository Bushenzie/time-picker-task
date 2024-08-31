import Button from "./ui/Button";

export default function TimesList() {
    return (
        <div>
            <div className="grid grid-cols-3 gap-2">
                <Button className="w-full text-sm bg-transparent border-theme-secondary border-2 font-extralight">
                    <div className="capacity absolute top-1 left-2 text-xs">
                        (2/2)
                    </div>
                    <span>14:00</span>
                </Button>
                <Button className="w-full text-sm bg-transparent border-theme-secondary border-2 font-extralight">
                    <div className="capacity absolute top-1 left-2 text-xs">
                        (0/2)
                    </div>
                    <span>15:00</span>
                </Button>
                <Button className="w-full text-sm bg-transparent border-theme-secondary border-2 font-extralight">
                    <div className="capacity absolute top-1 left-2 text-xs">
                        (1/2)
                    </div>
                    <span>16:00</span>
                </Button>
            </div>
        </div>
    );
}
