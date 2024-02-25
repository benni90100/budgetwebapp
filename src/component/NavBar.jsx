import { Link } from "react-router-dom";

export function NavBar() {
    return(
        <div className="flex justify-between items-center p-2 bg-slate-700 rounded-lg">
           <div>
           <ul className="flex text-white gap-2">
                <li><Link to={"/"}>home</Link></li>
                <li><Link to={"/spese"}>Spese</Link></li>
                <li><Link to={"/entrate"}>Entrate</Link></li>
            </ul>
           </div>
           <div>
           <ul className="flex text-white gap-2 p-2">
                <li><Link to={"/registrati"}>registrati</Link></li>
                <li><Link to={"/accedi"}>registrati</Link></li>
            </ul>
           </div>
        </div>
    )
}