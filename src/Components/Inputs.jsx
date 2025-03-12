 
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
 /* eslint-disable no-unused-vars */
 import React, { useState } from "react";

const Inputs = ({ isSelcted, splitBill }) => {
  const [bill, setBill] = useState("");
  const [youPay, setyouPay] = useState("");
  const friendPay = bill ? bill - youPay : "";

  const [whoPays, setwhoPays] = useState("User");

  //console.log("the selected :", isSelcted);

  function handleSubmit(e){
    if(!bill || !youPay) return
    e.preventDefault();
    splitBill(whoPays=== "User" ? friendPay : -youPay)
    
  }

  return (
    <form onSubmit={handleSubmit} className=" rounded bg-amber-100 w-[500px] h-[300px] p-7">
      <h1 className="text-2xl font-extrabold">
        SPLIT A BILL WITH {isSelcted.name}
      </h1>
      <div className="flex justify-between w-[450px] mt-4">
        <label> 💰 Bill Value </label>
        <input
        
          className=" bg-gray-200 ml-2 text-center w-[118.5px]"    
          value={bill}
          onChange={(e)=>setBill(Number(e.target.value))}
        ></input>
      </div>
      <div className="flex justify-between w-[450px] mt-4">
        <label>🧍 Your expenses </label>
        <input
          className=" bg-gray-200 ml-2 text-center w-[118.5px]"
          value={youPay}
          onChange={(e)=>setyouPay(Number(e.target.value))}
          
        ></input>
      </div>
      <div className="flex justify-between w-[450px] mt-4">
        <label>🧍🧍‍♂️ {isSelcted.name}'s Expenses</label>
        <input
          className=" bg-gray-200 ml-2 text-center w-[118.5px]"
          disabled
          value={friendPay}
        ></input>
      </div>

      <div className="flex justify-between w-[450px] mt-4 ">
        <h1>🤑 Who is paying the bill</h1>
        <select
          value={whoPays}
          onChange={(e) => setwhoPays(e.target.value)}
          className="bg-gray-200  w-[119px]"
        >
          <option value="User" className="text-center border ">
            You
          </option>
          <option value="friend">{isSelcted.name}</option>
        </select>
      </div>
      <div className="flex justify-end  w-[450px] mt-4 ">
        <button className="bg-amber-400 rounded px-7 py-1 font-bold">
          Split bill
        </button>
      </div>
    </form>
  );
};

export default Inputs;


// import React, { useState, useEffect } from "react";

// const Inputs = ({ isSelcted, splitBill }) => {
//   const [bill, setBill] = useState("");
//   const [youPay, setYouPay] = useState("");
//   const [whoPays, setWhoPays] = useState("User");

//   // Reset inputs when a new person is selected
//   useEffect(() => {
//     setBill("");
//     setYouPay("");
//     setWhoPays("User");  // Reset to default
//   }, [isSelcted]);

//   const friendPay = bill ? bill - youPay : "";

//   function handleSubmit(e) {
//     if (!bill || !youPay) return;
//     e.preventDefault();
//     splitBill(whoPays === "User" ? friendPay : -youPay);
//   }

//   return (
//     <form onSubmit={handleSubmit} className="rounded bg-amber-100 w-[500px] h-[300px] p-7">
//       <h1 className="text-2xl font-extrabold">
//         SPLIT A BILL WITH {isSelcted?.name}
//       </h1>
//       <div className="flex justify-between w-[450px] mt-4">
//         <label> 💰 Bill Value </label>
//         <input
//           className="bg-gray-200 ml-2 text-center w-[118.5px]"    
//           value={bill}
//           onChange={(e) => setBill(Number(e.target.value))}
//         />
//       </div>
//       <div className="flex justify-between w-[450px] mt-4">
//         <label>🧍 Your expenses </label>
//         <input
//           className="bg-gray-200 ml-2 text-center w-[118.5px]"
//           value={youPay}
//           onChange={(e) => setYouPay(Number(e.target.value))}
//         />
//       </div>
//       <div className="flex justify-between w-[450px] mt-4">
//         <label>🧍🧍‍♂️ {isSelcted?.name}'s Expenses</label>
//         <input
//           className="bg-gray-200 ml-2 text-center w-[118.5px]"
//           disabled
//           value={friendPay}
//         />
//       </div>
//       <div className="flex justify-between w-[450px] mt-4 ">
//         <h1>🤑 Who is paying the bill</h1>
//         <select
//           value={whoPays}
//           onChange={(e) => setWhoPays(e.target.value)}
//           className="bg-gray-200 w-[119px]"
//         >
//           <option value="User">You</option>
//           <option value="friend">{isSelcted?.name}</option>
//         </select>
//       </div>
//       <div className="flex justify-end w-[450px] mt-4 ">
//         <button className="bg-amber-400 rounded px-7 py-1 font-bold">
//           Split bill
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Inputs;
