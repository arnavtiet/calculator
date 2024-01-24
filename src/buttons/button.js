





import React from "react"
import styles from './b.css'

const Button = ({val,type}) => {
  return (
    <div>
      <button className={type}>{val}</button>
    </div>
  )
};

export default Button;
