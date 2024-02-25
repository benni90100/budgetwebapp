import { useState } from "react";
import { Spese } from "./spese";

export function AggiungiSpesa({proprieta}) {
  const [spesa, setSpesa] = useState({
    id:0,
    causale: "",
    importo: 0.0,
    data:'',
  });
  const [speseAggiunte, setSpeseAggiunte] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSpeseAggiunte((prev) => [...prev, spesa]);
    console.log(speseAggiunte);
   
  };
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setSpesa((prev) => ({ ...prev, [key]: value }));
   
  };

  return (
    <>
      <div className=" flex flex-col   bg-stone-900 rounded-xl shadow-md">
        <div className="flex flex-col">
            <h2>{proprieta}</h2>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col  bg-stone-900 rounded-xl shadow-md"
          >
            <label htmlFor="causale" className="text-white text-center">
              causale
            </label>
            <input
              type="text"
              id="causale"
              name="causale"
              className="p-2 m-2"
              onChange={handleChange}
            />
            <label htmlFor="importo" className="text-white text-center">
              importo
            </label>
            <input
              type="text"
              id="importo"
              name="importo"
              className="p-2 m-2"
              onChange={handleChange}
            />
            <label htmlFor="causale" className="text-white text-center">
              data
            </label>
            <input
              type="date"
              id="data"
              name="data"
              className="p-2 m-2"
              onChange={handleChange}
            />
            <button className="bg-slate-700 m-1 py-1 ">Aggiungi {proprieta}</button>
          </form>
        </div>
      </div>
      {speseAggiunte &&
        speseAggiunte.map((spese) => {
          return <Spese key={spese[spese]} spese={spese} />;
        })}
    </>
  );
}
