const Results = () => {
  return (
    <>
      <h1 className="text-white text-3xl mt-6 ml-10">RESPONSES</h1>
      <div className="p-10 grid gap-[80px]">
        <h1 className="text-xl text-green-400">{"1)"} Changing button</h1>
        <div className=" grid gap-5 px-7 py-3 bg-gray-900 w-[900px] rounded-xl border border-gray-600 mx-auto">
          <section className="flex gap-2">
            <div className="rounded-full bg-red-400 w-3 h-3"></div>
            <div className="rounded-full bg-yellow-400 w-3 h-3"></div>
            <div className="rounded-full bg-green-400 w-3 h-3"></div>
          </section>
          <div>
            <h1 className="text-green-500">
              {"switcher ? ( "}
              <br />
              {`<div className="max-w-[90px] grid justify-center items-center rounded-full bg-green-400 px-4 py-2" onClick={() => {setSwitcher(!switcher);}}>ON</div>`}
              <br />
              {`) : (`}
              <br />
              {`<div
              className="max-w-[90px] grid justify-center items-center rounded-full bg-red-400 px-4 py-2"
              onClick={() => {
                setSwitcher(!switcher);
              }}
            >
              Of
            </div> )`}
            </h1>
          </div>
        </div>

        <h1 className="text-xl text-green-400">{"2)"} Counter</h1>

        <div className=" grid gap-5 px-7 py-3 bg-gray-900 w-[900px] rounded-xl border border-gray-600 mx-auto">
          <section className="flex gap-2">
            <div className="rounded-full bg-red-400 w-3 h-3"></div>
            <div className="rounded-full bg-yellow-400 w-3 h-3"></div>
            <div className="rounded-full bg-green-400 w-3 h-3"></div>
          </section>
          <div>
            <h1 className="text-green-500">
              {`<div className="h-48 w-80 border grid border-green-400 p-5 rounded-xl">`}
              <br />
              {`<h1 className="text-4xl text-green-400 mx-auto">{counter}</h1>`}
              <br />
              {`<div className="flex items-center justify-around">`}
              <br />
              {`<div
                className="text-xl text-green-400 p-3  border border-green-400 rounded-xl"
                onClick={() => {
                  setCounter(counter - 1);
                }}
              >
                -
              </div>`}
              <br />
              {`<div
                className="text-xl text-green-400 p-3  border border-green-400 rounded-xl"
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                +
              </div>`}
              <br />
              {`<div
                className="text-xl text-green-400 p-3  border border-green-400 rounded-xl"
                onClick={() => {
                  setCounter(0);
                }}
              >
                reset
              </div>`}
              <br />
              {`</div>`}
              <br />
              {`</div>`}
            </h1>
          </div>
        </div>

        <h1 className="text-xl text-green-400">
          {"3)"} Message && Color Picker
        </h1>

        <div className=" grid gap-5 px-7 py-3 bg-gray-900 w-[900px] rounded-xl border border-gray-600 mx-auto">
          <section className="flex gap-2">
            <div className="rounded-full bg-red-400 w-3 h-3"></div>
            <div className="rounded-full bg-yellow-400 w-3 h-3"></div>
            <div className="rounded-full bg-green-400 w-3 h-3"></div>
          </section>
          <div>
            <h1 className="text-green-500">
              {`<div className="min-h-[192px] w-80 border grid border-green-400 p-5 rounded-xl">`}
              <br />
              {`<input
              type="text"
              value={value}
              className="outline-none text-green-400 h-8 bg-transparent border border-green-400 rounded-xl p-2"
              onChange={(e) => setValue(e.target.value)}
            />`}
              <br />
              {`<section className="flex flex-wrap gap-y-3 gap-x-6 my-3">`}
              <br />
              {`<div
                className="rounded-full bg-white w-12 h-12"
                onClick={() => {
                  setColor("white");
                }}
              ></div>`}
              <br />
              {`              <div
                className="rounded-full bg-red-600 w-12 h-12"
                onClick={() => {
                  setColor("red");
                }}
              ></div>`}
              <br />
              {`              <div
                className="rounded-full bg-green-400 w-12 h-12"
                onClick={() => {
                  setColor("#0be04d");
                }}
              ></div>`}
              <br />
              {`              <div
                className="rounded-full bg-cyan-400 w-12 h-12"
                onClick={() => {
                  setColor("rgb(0 255 250)");
                }}
              ></div>`}
              <br />
              {`              <div
                className="rounded-full bg-yellow-300 w-12 h-12"
                onClick={() => {
                  setColor("yellow");
                }}
              ></div>`}
              <br />
              {`              <div
                className="rounded-full bg-orange-400 w-12 h-12"
                onClick={() => {
                  setColor("orange");
                }}
              ></div>`}
              <br />
              {`              <div
                className="rounded-full bg-purple-600 w-12 h-12"
                onClick={() => {
                  setColor("#ac00ff");
                }}
              ></div>`}
              <br />
              {`              <div
                className="rounded-full bg-pink-500 w-12 h-12"
                onClick={() => {
                  setColor("#ff51b3");
                }}
              ></div>`}
              <br />
              {`</section>`}
              <br />
              {`<h1 style={{ color: color }} className="mx-auto text-3xl">`}
              <br />
              {`{value}`}
              <br />
              {`</h1>`}
              <br />
              {`</div>`}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
