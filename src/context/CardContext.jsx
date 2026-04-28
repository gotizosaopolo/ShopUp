import { createContext, useState, useContext } from "react";

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

  return (
    <CardContext.Provider value={{cardItems,addToCard}}>
      {children}
    </CardContext.Provider>
  );
}

export function useCard() {
  const context = useContext(CardContext);

  return context;
}