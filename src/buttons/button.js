




import { useState } from "react";
import React from "react"
import styles from './b.css'






function Button({ val, type ,eve,naam}) {
  
    // const [result,setResult]=useState("");

    // const disp=(e) =>
    // {
    // setResult(result.concat(e.target.name));
    // }
  
  return (
    <div>
      <button className={type} onClick={eve} name={naam}>{val}</button>
    </div>
  );
}

export default Button;
