
import { Dashboard } from "./dashboard/Dashboard";
import { AggiungiSpesa } from "./spese/AggiungiSpesa";

export function SpeseContainer() {
    return(
        <Dashboard>
           <AggiungiSpesa proprieta={"spese"}/>
        </Dashboard>
    )
}