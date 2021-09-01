import { Color } from "jest-matcher-utils/node_modules/chalk";
import React, {useState} from "react";





function Toggle() {
  
  let [isOn, setIsOn] = useState(false)
  function handleClick(){
    setIsOn(isOn => !isOn)

  }
  const color = isOn ? "red" :"white"
  return <button style={{background: color}} onClick ={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
