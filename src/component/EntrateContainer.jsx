
import { Dashboard } from "./dashboard/Dashboard";
import { AggiungiSpesa } from "./spese/AggiungiSpesa";

export function EntrateContainer() {
    return(
        <Dashboard>
           <AggiungiSpesa proprieta={"entrate"}/>
        </Dashboard>
    )
}