import DatePicker from "./components/DatePicker";
import Nav from "./components/Nav";
import TimesList from "./components/TimesList";
import { CalendarContextProvider } from "./context/CalendarContext";

function App() {
    return (
        <div className="w-full m-0 p-0 h-screen flex items-center justify-center bg-red">
            <div className="p-8 space-y-4 shadow-sm shadow-black rounded-xl h-4/5 w-[40vw] text-theme-secondary bg-gradient-to-b from-theme-primaryDark to-theme-primaryLight">
                <CalendarContextProvider>
                  <Nav />
                  <DatePicker />
                  <TimesList />
                </CalendarContextProvider>
            </div>
        </div>
    );
}

export default App;
