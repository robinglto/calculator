import React from "react";

export default function Botones(props: any) {
  const zinc = `bg-zinc-700 p-2 w-14 h-14 rounded-2xl shadow-md shadow-zinc-700`;
  const amber = `bg-amber-500 p-2 w-14 h-14 rounded-2xl shadow-md shadow-amber-500`;

  return (
    <button
      className={props.data ? zinc : amber}
      value={props.value}
      onClick={props.metodo}
    >
      {props.show}
    </button>
  );
}
