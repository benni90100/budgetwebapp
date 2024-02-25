export function Spese({ spese}) {
    
    return(
    <>
    <div className=" flex flex-col  w-60 bg-stone-900 rounded-xl shadow-md">
      <div className="flex flex-col">
          <div className=" flex flex-col  bg-stone-900 rounded-xl shadow-md">
          <p className="text-white text-center p-2">{spese.causale}</p>
          <p className="text-white text-center p-2">{Number(spese.importo)} €</p>
          <p className="text-white text-center p-2">{spese.data}</p>
          <button className="bg-slate-700 m-1 py-1 ">rimuovi</button>
          </div>
      </div>
    </div>
  </>)
}