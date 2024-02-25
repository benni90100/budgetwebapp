

export function Container({ children }) {
  return (
    <>
      <div className=" flex items-center flex-col w-screen bg-slate-950 p-2">{children}</div>
    </>
  );
}
