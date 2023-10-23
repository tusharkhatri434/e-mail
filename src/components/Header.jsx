import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addItems } from '../Cart/CartSlice';

function Header() {
const readData = useSelector((store)=>store.cart.read)
const dispatch = useDispatch();
  const showRead = () =>{
       dispatch(addItems(readData));
  }
  return (
    <div className='Nav-bar'>
        <div>Filter By:</div>
        <ul>
            <li>Unread</li>
            <li onClick={()=>{
              showRead();
            }}>Read</li>
            <li>Favorites</li>
        </ul>
    </div>
  )
}

export default Header