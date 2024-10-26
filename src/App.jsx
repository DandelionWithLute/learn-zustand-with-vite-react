import React from "react";
import useStore from "./util/zustand";

const App = () => {
  const hp = useStore((s) => s.hp);
  const pp = useStore((s) => s.pp);
  const increaseHp = useStore((s) => s.increaseHp);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center text-2xl gap-3">
      <div className="flex gap-3 items-center justify-center">
        <div className="">hp</div>
        <div>{hp}</div>
        <button className="border p-3 rounded-md" onClick={() => increaseHp()}>
          add
        </button>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <div className="">pp</div>
        <div>{pp}</div>
        <button className="border p-3 rounded-md">add</button>
      </div>
    </div>
  );
};

export default App;
