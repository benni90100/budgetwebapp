import { CardEntrate } from "./CardEntrate";
import { CardUscite } from "./CardUscite";
import PieChart from "./PieChart";
import { Recap } from "./Recap";

export function Dashboard({children}) {
    return(
        <div className="flex flex-col justify-center items-center gap-2 mx-8 my-2 bg-stone-600 p-8 rounded-lg">
            {children}
        </div>
    )
}