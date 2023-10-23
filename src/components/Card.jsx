import React, { useState } from 'react'
import {PROFILE_IMG} from "../utils/Contents"
const Card = ({data}) => {
  const[color,setColor] = useState(false);
   const changeColor = () =>{
    setColor(!color);
     
   }
   const style = color ? "card bg-dark" : "card";
  return (
    <div className={style} onClick={()=>{
      changeColor();
    }}>
      {PROFILE_IMG}
      <ul>
        <li>
          From :{" "}
          <span>
            {" "}
            {data?.from?.name} {data?.from?.email}
          </span>
        </li>
        <li>
          Subject: <span>{data?.subject}</span>
        </li>
        <li>{data?.short_description}</li>
        <li>26/02/2020 10:30am</li>
      </ul>
    </div>
  );
}

export default Card