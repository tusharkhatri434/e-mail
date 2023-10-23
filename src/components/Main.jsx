import React, { useEffect, useState } from "react";
import { MAIL_API } from "../utils/Contents";
import Card from "./Card";
import DetailCard from "./DetailCard";
import { useDispatch,useSelector } from "react-redux";
import { addItems, readItems, unreadItems } from "../Cart/CartSlice";

const Main = () => {
  const readData = useSelector((store) => store.cart.read);
  const itemsDataStore = useSelector((store)=>store.cart.items);
  console.log("fsfdgh---",itemsDataStore);
  const [items, setItems] = useState([]);
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(MAIL_API);
    const json = await data.json();
    setItems(json.list);
    dispatch(addItems(json.list));
    dispatch(unreadItems(json.list));
  };

  if(items.length < 1){
    return null;
  }
  return (
    <main className={id && "flex"}>
      <div className="card-section">
        {itemsDataStore[0]?.map((v) => (
          <div onClick={()=>{
            setId(v);
            dispatch(readItems(v));
          }}>
            <Card
              data={v}
              key={v.id}
            />
          </div>
        ))}
      </div>
      {id && <DetailCard value={id} />}
    </main>
  );};

export default Main;
