import { FcBullish } from "react-icons/fc";
import { FcRightUp } from "react-icons/fc";
export function Recap() {
  return (
    <>
      <div className=" flex flex-col mx-0 w-60 h-40 bg-stone-900 rounded-xl shadow-md">
        <div className="flex m-0">
          <FcBullish className=" text-8xl p-4 bg-stone-800 m-2 rounded-xl" />
          <div className="flex flex-col pl-8">
            <h2 className=" text-white text-2xl pt-2">Recap</h2>
            <p className=" text-white text-2xl pt-2"> -€1500</p>
          </div>
        </div>
        <div className="flex align-bottom justify-end pr-4">
          <FcRightUp className="text-xl"/>
          <p className=" text-white pl-2 text-center">tendenza</p>
        </div>
      </div>
    </>
  );
}
