import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../data/products";
import { useCard } from "../context/CardContext";

export default function ProductDetails(){
    const {id}=useParams();
    const [product,setProduct]=useState(null)
    const navigate= useNavigate()
    useEffect(()=>{
        const foundProduct= getProductById(id)

        if(!foundProduct){
            navigate("/");
            return
        }
        setProduct(foundProduct);
    },[id])

    while (!product) {
        return <p>Chargement des données...</p>;
    }

    const {addToCard,cardItems}=useCard()
    const productInCard=cardItems.find((item)=>item.id===product.id)
    const productQuantityLabel = productInCard ? 
       `(${productInCard.quantity})` : ""

    return(
        <div className="page">
            <div className="container">
                <div className="product-detail">
                    <div className="product-detail-image">
                        <img src={product.image} alt={product.name}/>
                    </div>
                    <div className="product-detail-containt">
                        <h1 className="product-detail-name">{product.name}</h1>
                        <p className="product-detail-price">{product.price}</p>
                        <p className="product-detail-description">{product.description}</p>
                        <button className="btn btn-primary" onClick={()=>addToCard(product.id)}>
                            Ajouter au panier {productQuantityLabel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}