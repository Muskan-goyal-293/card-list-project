import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  let [userVal, SetUserVal] = useState([]);
  function handleUser(val) {
    SetUserVal([...userVal, val]);
  }

  function HandleRemove(index){
   let val = userVal.filter((_,idx)=>{return idx!==index})
    SetUserVal(val)
  }
  return (
    <div className=" h-full w-full p-4">
      <Form handleUser={handleUser} />
      <Card  userVal={userVal} handleRemove={HandleRemove} />
    </div>
  );
}

export default App;
