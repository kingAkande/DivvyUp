/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Inputs = ({isSelcted}) => {
  const [bill, setBill] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [expenses2, setExpenses2] = useState('');

  console.log("the selected :" , isSelcted)

  return (
    <div className=" rounded bg-amber-100 w-[500px] h-[300px] p-7">
      <h1 className="text-2xl font-extrabold">SPLIT A BILL WITH {isSelcted.name}</h1>
      <Fields
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      >
        <h1>💰 Bill value</h1>
      </Fields>
      <Fields
        type="number"
        value={expenses}
        onChange={(e) => setExpenses(Number(e.target.value))}
      >
        <h1>🧍 Your expenses</h1>
      </Fields>
      <Fields
        type="text"

        value={expenses2}
        onChange={(e) => setExpenses2(Number(e.target.value))}
      >
        <h1>🧍🧍‍♂️ {isSelcted.name}'s Expenses</h1>
      </Fields>
      <div className="flex justify-between w-[450px] mt-4 ">
        <h1>🤑 Who is paying the bill</h1>
        <select className="bg-gray-200  w-[119px]">
          <option className="text-center border ">You</option>
          <option>{isSelcted.name}</option>
        </select>
      </div>
      <div className="flex justify-end  w-[450px] mt-4 ">
        <button className="bg-amber-400 rounded px-7 py-1 font-bold">
          Split bill
        </button>
      </div>
    </div>
  );
};

export default Inputs;

function Fields({ children, type, value, onChange }) {
  return (
    <div className="flex justify-between w-[450px] mt-4  ">
      {children}{" "}
      <input
        type={type}
        className=" bg-gray-200 ml-2 text-center w-[118.5px]"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}
