/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import p1 from "../assets/brain1101.jpg";
// import p2 from "../assets/Brian010.jpg";
// import p3 from "../assets/b2.jpg";
// import p4 from "../assets/Dp.webp";

const Persons = ({ friends, setFriends,isAdded, setisAdded, handleSelect, isSelcted }) => {
  // const ppls = [
  //   { id: 1, name: "Clark", balance: -2, uRL: p1 },
  //   { id: 2, name: "Sarah", balance: 10, uRL: p2 },
  //   { id: 3, name: "Anthony", balance: 0, uRL: p3 },
  // ];

  // const [isAdded, setisAdded] = useState(false);

  // const [friends, setFriends] = useState(ppls);

  function handleNewF(friend) {
    setFriends((friends) => [...friends, friend]);
    //console.log(friends);
  }

  function handleAdd() {
    setisAdded((isAdded) => !isAdded);
    
  }

  return (
    <div className="inline-flex flex-col  p-2">
      {friends.map((p) => (
        <div key={p.id}>
          <Person friends={p} image={p.uRL} handleSelect={handleSelect} isSelcted={isSelcted}>
            <h1 className="font-extrabold mb-1">{p.name}</h1>
            {p.balance < 0 && (
              <p className="text-red-600">
                you owe {p.name} {Math.abs(p.balance)}$
              </p>
            )}
            {p.balance > 0 && (
              <p className="text-green-700">
                {p.name} owes you {Math.abs(p.balance)}$
              </p>
            )}
            {p.balance === 0 && <p>You and {p.name} are at even </p>}
          </Person>
        </div>
      ))}

      {isAdded && <NewPerson onhandleNew={handleNewF} />}
      <div className="flex justify-end mt-6 mr-4 ">
        <button
          className="bg-amber-400 px-3 py-1 rounded-xl font-bold"
          onClick={handleAdd}
        >
          {isAdded ? "Close" : "Add friend"}
        </button>
      </div>
    </div>
  );
};

export default Persons;

function Person({ children, image, friends, handleSelect ,isSelcted}) {
  const theSelected = friends?.id===isSelcted?.id;
 
  return (
    <div
      key={image}
      className={theSelected ?"flex items-center rounded-xl w-[400px] bg-amber-100  p-2 mt-4" : " flex items-center rounded-xl w-[400px]  p-2 mt-4" }
    >
      <img
        src={image}
        alt="pictureOne"
        className="w-14 float-left mr-4  rounded-full"
      />
      <div className="flex w-[310px] gap-5 items-center ">
        <div className=" w-[210px]">{children}</div>

        <button
          className="bg-amber-400 rounded-xl px-4 py-1 font-bold "
          onClick={() => handleSelect(friends)}
        >
          {theSelected? "Close" : "Select"}
        </button>
      </div>
    </div>
  );
}

function NewPerson({ onhandleNew }) {
  const [name, setFriendName] = useState("");
  const [uRL, setURL] = useState("https://i.pravatar.cc/48");
  // const [friends, setFriends] = useState([]);

  // function handleADD(friend) {
  //   setFriends((friends) => [...friends, friend]);
  //   console.log(friends);
  // }

  function handleSUbmit(e) {
    e.preventDefault();

    if (!name || !uRL) return;
    const id = crypto.randomUUID();
    const newFriend = { id, name, balance: 0, uRL: `${uRL}?=${id}` };

    onhandleNew(newFriend);
    setFriendName("");
  }

  return (
    <form className="bg-amber-100 mt-4 p-4 rounded-xl" onSubmit={handleSUbmit}>
      <div className="flex justify-between ">
        <h1 className="font-bold ">🧍🧍 Friend Name</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setFriendName(e.target.value)}
          className=" rounded bg-gray-200"
        ></input>
      </div>
      <div className="flex justify-between mt-4">
        <h1 className="font-bold ">🧔 Image URL</h1>
        <input
          type="text"
          value={uRL}
          onChange={(e) => setURL(e.target.value)}
          className=" rounded bg-gray-200"
        ></input>
      </div>
      <div className="flex justify-end  mt-4">
        <button
          //onClick={onhandleNew}
          className="bg-amber-400 px-22 py-2 rounded-xl font-extrabold "
        >
          Add
        </button>
      </div>
    </form>
  );
}
