/* eslint-disable no-unused-vars */

import Inputs from "./Components/Inputs";
import Persons from "./Components/Persons";
import { useState } from "react";
import p1 from "./assets/brain1101.jpg";
import p2 from "./assets/Brian010.jpg";
import p3 from "./assets/b2.jpg";
import p4 from "./assets/Dp.webp";

function App() {               
  const ppls = [
    { id: 1, name: "Clark", balance: -2, uRL: p1 },
    { id: 2, name: "Sarah", balance: 10, uRL: p2 },
    { id: 3, name: "Anthony", balance: 0, uRL: p3 },
  ];

  const [friends, setFriends] = useState(ppls);

  const [isSelcted, setisSelected] = useState(null);

   const [isAdded, setisAdded] = useState(false);


  function handleSelect(friend) {
    setisSelected((curr)=> curr?.id === friend.id ? null : friend);
    setisAdded(false)
  }

  return (
    <div className="flex gap-8 mt-8 justify-center ">
      <Persons
        friends={friends}
        setFriends={setFriends}
        handleSelect={handleSelect}
        isSelcted={isSelcted}
        isAdded={isAdded}
        setisAdded={setisAdded}
      />
      {isSelcted && <Inputs isSelcted = {isSelcted} />}
    </div>
  );
}

export default App;
