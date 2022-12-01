import React, { useState } from "react";
import Botones from "./Botones";

export default function Calculator() {
  const [val, setVal] = useState("0");

  const calculate = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal("Error");
    }
  };

  function metodo(e: any) {
    setVal(val + e.target.value);
  }

  return (
    <div className="flex justify-center mt-32 text-2xl">
      <div className="space-y-2">
        <input
          onClick={() => setVal("")}
          className="bg-black text-end outline-0 outline-none cursor-pointer"
          type="text"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />

        <div>
          <div className="space-x-2 text-center">
            <Botones value={7} metodo={metodo} show={7} data={true} />
            <Botones value={8} metodo={metodo} show={8} data={true} />
            <Botones value={9} metodo={metodo} show={9} data={true} />
            <Botones value={"+"} metodo={metodo} show={"+"} data={false} />
          </div>
        </div>

        <div>
          <div className="space-x-2 text-center">
            <Botones value={4} metodo={metodo} show={4} data={true} />
            <Botones value={5} metodo={metodo} show={5} data={true} />
            <Botones value={6} metodo={metodo} show={6} data={true} />
            <Botones value={"-"} metodo={metodo} show={"-"} data={false} />
          </div>
        </div>

        <div>
          <div className="space-x-2 text-center">
            <Botones value={1} metodo={metodo} show={1} data={true} />
            <Botones value={2} metodo={metodo} show={2} data={true} />
            <Botones value={3} metodo={metodo} show={3} data={true} />
            <Botones value={"*"} metodo={metodo} show={"*"} data={false} />
          </div>
        </div>

        <div>
          <div className="space-x-2 text-center">
            <Botones metodo={() => setVal("")} show={"C"} data={true} />
            <Botones value={0} metodo={metodo} show={0} data={true} />
            <Botones value={"="} metodo={calculate} show={"="} data={true} />
            <Botones value={"/"} metodo={metodo} show={"/"} data={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
