"use client";
import Link from "next/link";
import { useState } from "react";

const UseState = () => {
  const [switcher, setSwitcher] = useState(true);
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");
  const [color, setColor] = useState("#ffff");
  return (
    <>
      <h1 className="text-white text-3xl mt-6 ml-10">USE STATE PRACTICE</h1>

      <div className="p-10 grid gap-[80px]">
        <div className="grid gap-2">
          <h1 className="text-xl text-green-400">{"1)"} Changing button</h1>
          <p className="text-gray-400">
            Create a button that contains "on" and "of" if clicked it changes
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
          <Link href="useState/results">
            <div className="text-green-400 mt-6 border-b-2 border-green-400 max-w-[120px]">
              Link to solution
            </div>
          </Link>
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
                  setCounter(counter - 1);
                }}
              >
                -
              </div>

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
                  setCounter(0);
                }}
              >
                reset
              </div>
            </div>
          </div>
          <Link href="useState/results">
            <div className="text-green-400 mt-6 border-b-2 border-green-400 max-w-[120px]">
              Link to solution
            </div>
          </Link>
        </div>

        <div className="grid gap-2">
          <h1 className="text-xl text-green-400">
            {"3)"} Message && Color Picker
          </h1>
          <p className="text-gray-400">
            Create a prompt and a color picker, the user can pick a color and
            whrite a message the color change the color message.
          </p>
          <div className="min-h-[192px] w-80 border grid border-green-400 p-5 rounded-xl">
            <input
              type="text"
              value={value}
              className="outline-none text-green-400 h-8 bg-transparent border border-green-400 rounded-xl p-2"
              onChange={(e) => setValue(e.target.value)}
            />
            <section className="flex flex-wrap gap-y-3 gap-x-6 my-3">
              <div
                className="rounded-full bg-white w-12 h-12"
                onClick={() => {
                  setColor("white");
                }}
              ></div>
              <div
                className="rounded-full bg-red-600 w-12 h-12"
                onClick={() => {
                  setColor("red");
                }}
              ></div>
              <div
                className="rounded-full bg-green-400 w-12 h-12"
                onClick={() => {
                  setColor("#0be04d");
                }}
              ></div>
              <div
                className="rounded-full bg-cyan-400 w-12 h-12"
                onClick={() => {
                  setColor("rgb(0 255 250)");
                }}
              ></div>
              <div
                className="rounded-full bg-yellow-300 w-12 h-12"
                onClick={() => {
                  setColor("yellow");
                }}
              ></div>
              <div
                className="rounded-full bg-orange-400 w-12 h-12"
                onClick={() => {
                  setColor("orange");
                }}
              ></div>
              <div
                className="rounded-full bg-purple-600 w-12 h-12"
                onClick={() => {
                  setColor("#ac00ff");
                }}
              ></div>
              <div
                className="rounded-full bg-pink-500 w-12 h-12"
                onClick={() => {
                  setColor("#ff51b3");
                }}
              ></div>
            </section>
            <h1 style={{ color: color }} className="mx-auto text-3xl">
              {value}
            </h1>
          </div>
          <Link href="useState/results">
            <div className="text-green-400 mt-6 border-b-2 border-green-400 max-w-[120px]">
              Link to solution
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UseState;
