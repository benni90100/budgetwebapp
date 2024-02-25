import { Link } from "react-router-dom";

export function Eside() {
  return (
    <div className=" border-2 border-stone-600 p-5 mx-8 shadow-lg rounded-xl   text-white bg-stone-900">
      <div>
        <h2 className=" font-bold p-5">i tuoi risparmi</h2>
      </div>
      <ul>
        <li className=" p-4 border pr-24 m-2 hover:bg-stone-600 rounded-xl">
          <Link>Dashboard</Link>
        </li>
        <li className=" p-4 border pr-24 m-2 hover:bg-stone-600 rounded-xl">
          <Link>Spese</Link>
        </li>
        <li className="p-4 border pr-24 m-2 hover:bg-stone-600 rounded-xl">
          <Link>Entrate</Link>
        </li>
      </ul>
      <div>
        <h2 className=" font font-bold p-5">Connetti</h2>
      </div>
      <ul className=" ">
        <li className=" p-4 border pr-24 m-2 hover:bg-stone-600 rounded-xl">
          <Link>Log-In</Link>
        </li>
        <li className="p-4 border pr-24 m-2 hover:bg-stone-600 rounded-xl">
          <Link>Sign-in</Link>
        </li>
      </ul>
    </div>
  );
}
