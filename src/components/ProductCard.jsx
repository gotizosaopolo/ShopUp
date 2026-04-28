import { Link } from "react-router-dom"
import { useCard } from "../context/CardContext"


export default function ProductCard({product}){
    const {addToCard,cardItems}=useCard()
    const productInCard=cardItems.find((item)=>item.id===product.id)
    const productQuantityLabel = productInCard ? 
       `(${productInCard.quantity})` : ""
    
    return( 
        <div className="product-card" key={product.id}>  
            <img src={product.image} alt={product.name} className="product-card-image"/>
            <div className="product-card-containt">
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-price">${product.price}</p>
            </div>
            <div className="product-card-actions">
                <Link className="btn btn-secondary" to={`/products/${product.id}`}>Voir details</Link>
                <button className="btn btn-primary" onClick={()=>addToCard(product.id)}>
                    Ajouter au panier {productQuantityLabel}
                </button>
            </div>
        </div>
    )
}