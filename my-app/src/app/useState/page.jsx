"use client";

import { useState } from "react";

const UseState = () => {
  const [switcher, setSwitcher] = useState(true);

  return (
    <>
      <div className="p-10 grid gap-4">
        <h1 className="text-white text-3xl">USE STATE PRACTICE</h1>
        <div className="grid gap-2">
          <h1 className="text-xl text-green-400">{"1)"} Changing button</h1>
          <p className="text-gray-400">
            create a button that contains "on" and "of" if clicked it changes
            color and content simulating a common switch
          </p>
          {switcher ? (
            <div
              className="max-w-[90px] grid justify-center items-center rounded-full bg-green-400 px-4 py-2"
              onClick={() => {
                setSwitcher(!switcher);
              }}
            >
              ON
            </div>
          ) : (
            <div
              className="max-w-[90px] grid justify-center items-center rounded-full bg-red-400 px-4 py-2"
              onClick={() => {
                setSwitcher(!switcher);
              }}
            >
              Of
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UseState;
