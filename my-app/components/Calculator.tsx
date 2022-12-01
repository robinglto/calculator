import React, { useState } from "react";

export default function Calculator() {
  const [val, setVal] = useState("0");

  const calculate = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal("Error");
    }
  };

  return (
    <div className="flex justify-center mt-32 text-2xl">
      <div className="space-y-2">
        <input
          onClick={(e) => setVal("")}
          className="bg-black text-end outline-0 outline-none cursor-pointer"
          type="text"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />

        <div>
          <div className="space-x-4 text-center">
            <button
              className="bg-zinc-700 p-2 w-14 h-14 rounded-full"
              value={7}
              onClick={(e) => {
                setVal(val + e.target.value);
              }}
            >
              7
            </button>

            <button
              className="bg-zinc-700 p-2 w-14 h-14 rounded-full"
              value={8}
              onClick={(e) => {
                setVal(val + e.target.value);
              }}
            >
              8
            </button>

            <button
              className="bg-zinc-700 p-2 w-14 h-14 rounded-full"
              value={9}
              onClick={(e) => {
                setVal(val + e.target.value);
              }}
            >
              9
            </button>

            <button
              className="bg-amber-500 p-2 w-14 h-14 rounded-full"
              value={"+"}
              onClick={(e) => {
                setVal(val + e.target.value);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div>
          <div className="space-x-4 text-center">
            <button
              className="bg-zinc-700 p-2 w-14 h-14 rounded-full"
              value={4}
              onClick={(e) => {
                setVal(val + e.target.value);
              }}
            >
              4
            </button>

            <button
              className="bg-zinc-700 p-2 w-14 h-14 rounded-full"
              value={5}
              onClick={(e) => {
                setVal(val + e.target.value);
              }}
            >
              5
            </button>

            <button
              className="bg-zinc-700 p-2 w-14 h-14 rounded-full"
              value={6}
              onClick={(e) => {
                setVal(val + e.target.value);
              }}
            >
              6
            </button>

            <button
              className="bg-amber-500 p-2 w-14 h-14 rounded-full"
              value={"-"}
              onClick={(e) => {
                setVal(val + e.target.value);
              }}
            >
              -
            </button>
          </div>
        </div>

        <div>
          <div className="space-x-4 text-center">
            <button
              className="bg-zinc-700 p-2 w-14 h-14 rounded-full"
              value={1}
              onClick={(e) => {
                setVal(val + e.target.value);
              }}
            >
              1
            </button>

            <button
              className="bg-zinc-700 p-2 w-14 h-14 rounded-full"
              value={2}
              onClick={(e) => {
                setVal(val + e.target.value);
              }}
            >
              2
            </button>

            <button
              className="bg-zinc-700 p-2 w-14 h-14 rounded-full"
              value={3}
              onClick={(e) => {
                setVal(val + e.target.value);
              }}
            >
              3
            </button>

            <button
              className="bg-amber-500 p-2 w-14 h-14 rounded-full"
              value={"*"}
              onClick={(e) => {
                setVal(val + e.target.value);
              }}
            >
              x
            </button>
          </div>
        </div>

        <div>
          <div className="space-x-4 text-center">
            <button
              className="bg-gray-400 text-black p-2 w-14 h-14 rounded-full"
              value={"c"}
              onClick={(e) => {
                setVal("");
              }}
            >
              C
            </button>

            <button
              className="bg-zinc-700 p-2 w-14 h-14 rounded-full"
              value={0}
              onClick={(e) => {
                setVal(val + e.target.value);
              }}
            >
              0
            </button>

            <button
              className="bg-gray-400 text-black p-2 w-14 h-14 rounded-full"
              value={"="}
              onClick={() => calculate()}
            >
              =
            </button>

            <button
              className="bg-amber-500 p-2 w-14 h-14 rounded-full"
              value={"/"}
              onClick={(e) => setVal(val + e.target.value)}
            >
              /
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
