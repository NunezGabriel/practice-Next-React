"use client";

import { useState } from "react";

const UseState = () => {
  const [switcher, setSwitcher] = useState(true);
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1 className="text-white text-3xl mt-6 ml-10">USE STATE PRACTICE</h1>

      <div className="p-10 grid gap-[80px]">
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
          <a
            className="text-green-400 mt-6 border-b-2 border-green-400 max-w-[120px]"
            href=""
          >
            Link to solution
          </a>
        </div>

        <div className="grid gap-2">
          <h1 className="text-xl text-green-400">{"2)"} Counter</h1>
          <p className="text-gray-400">
            Create a simple counter, it can increment, decrement and restart
          </p>
          <div className="h-48 w-80 border grid border-green-400 p-5 rounded-xl">
            <h1 className="text-4xl text-green-400 mx-auto">{counter}</h1>
            <div className="flex items-center justify-around">
              <div
                className="text-xl text-green-400 p-3  border border-green-400 rounded-xl"
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                +
              </div>
              <div
                className="text-xl text-green-400 p-3  border border-green-400 rounded-xl"
                onClick={() => {
                  setCounter(counter - 1);
                }}
              >
                -
              </div>
              <div
                className="text-xl text-green-400 p-3  border border-green-400 rounded-xl"
                onClick={() => {
                  setCounter(0);
                }}
              >
                reset
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseState;
