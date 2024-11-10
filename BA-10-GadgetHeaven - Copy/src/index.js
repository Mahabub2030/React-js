// get all data form Production card

import { toast } from "react-toastify";

const getStoredList = () =>{
  // addlist
  const storedListStr = localStorage.getItem('add to card');
  if(storedListStr){
    const stordList = JSON.parse(storedListStr)
    return stordList;
  }else{
    return[];
  }

}

const getWishList = () => {
  const storedWishListStr = localStorage.getItem('wishlist'); // Use consistent key
  return storedWishListStr ? JSON.parse(storedWishListStr) : [];
};


const addToWishList = (id) => {
  const storedWishList = getWishList();
  if (!storedWishList.includes(id)) {
    storedWishList.push(id);
    localStorage.setItem('wishlist', JSON.stringify(storedWishList));
  } else {
    console.log(id, 'already exists in wishlist');
  }
};


const getStoredList = () => {
  const storedCartStr = localStorage.getItem('cart'); // Use consistent key
  return storedCartStr ? JSON.parse(storedCartStr) : [];
};


// add a card to local sot

const addToCart = (id) => {
  const storedCart = getStoredList();
  if (!storedCart.includes(id)) {
    storedCart.push(id);
    localStorage.setItem('cart', JSON.stringify(storedCart));
  } else {
    console.log(id, 'already exists in cart');
  }
};
export {addToCart, addToWishList,getStoredList,getWishList}


//  remove data from localstore

