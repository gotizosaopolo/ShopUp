import { createContext, useState, useContext } from "react";
import { getProductById } from "../data/products";

const CardContext = createContext(null);

export default function AuthProvider({ children }) {
  const [cardItems, setCardItems]= useState([])

  function addToCard(productId){
    const existing= cardItems.find((i)=>i.id===productId);
    if (existing){
      let currentQuantity=existing.quantity
      let updatedCarditems=cardItems.map((item)=>
        item.id===productId
        ?{id:productId,quantity:currentQuantity+1}
        :item
      )
      setCardItems(updatedCarditems)
    }else{
      setCardItems([...cardItems,{id:productId, quantity:1}])
    }

  }


  function getCardItemsWithProducts() {

    return cardItems
      .map((item) => ({
        ...item,
        product: getProductById(item.id),
      }))
      .filter((item) => item.product);
  }

  function removeFromCard(productId){
    setCardItems(cardItems.filter((item)=>item.id !==productId))
  }

  function updateQuantity(productId,quantity){
    if(quantity<=0){
      removeFromCard(productId)
      return;
    }
    setCardItems(cardItems.map((item)=>
      item.id === productId ? {...item, quantity}:item
    ))
  }

  function getCardTotal(){
    const total = cardItems.reduce((total,item)=>{
      const product = getProductById(item.id);
      return total + (product ? product.price * item.quantity : 0);
    },0);
    return total;
  }

  function clearCard(){
    setCardItems([]);
  }

  return (
    <CardContext.Provider value={{cardItems,clearCard, getCardTotal, addToCard,getCardItemsWithProducts,removeFromCard,updateQuantity}}>
      {children}
    </CardContext.Provider>
  );
}

export function useCard() {
  const context = useContext(CardContext);

  return context;
}