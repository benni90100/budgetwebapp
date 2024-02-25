import { CardEntrate } from "./dashboard/CardEntrate";
import { Recap } from "./dashboard/Recap";
import { Dashboard } from "./dashboard/Dashboard";
import { CardUscite } from "./dashboard/CardUscite";
import PieChart from "./dashboard/PieChart";
import LineChart from "./dashboard/LineChart";
export function DashboardContainer() {
    return(
        <div className="flex flex-col">
             <Dashboard>
            <CardEntrate />
            <CardUscite />
            <Recap />
          </Dashboard>
          <Dashboard>
            <PieChart />
            <LineChart/>
          </Dashboard>
        </div>
    )
}