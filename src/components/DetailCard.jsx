import React, { useEffect, useState } from "react";
import { Body_Mail, PROFILE_IMG } from "../utils/Contents";
import { useSelector } from "react-redux";


const DetailCard = ({value}) => {

  const [data,setData] = useState();
  useEffect(()=>{
    async function getData(){
      const data = await fetch(Body_Mail + value?.id);
      const json = await data.json();
      setData(json);
    }
    getData();
  },[value]);

  const body = data?.body;
  return (
    <div className="DetailCard">
      <div className="profile-nav">
        <div className="profile-des-nav">
          {PROFILE_IMG}
          <ul>
            <li>{value?.subject}</li>
            <li>26/10/2023 10:23pm</li>
          </ul>
        </div>
        <button>Mark as Favourites</button>
      </div>
      <div className="Mail-body" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export default DetailCard;
