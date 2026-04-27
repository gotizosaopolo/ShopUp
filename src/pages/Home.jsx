import { Link } from "react-router-dom"
import { getProducts } from "../data/products"
import ProductCard from "../components/ProductCard"

export default function Home(){
    const products=getProducts()
    return(
        <div className="page">
            <div className="home-hero">
                <div className="home-title">Welcome to Vintage Store</div>
                <p className="home-subtitle">Le carrefour du moins cher</p>
            </div>
            <div className="container">
                <div className="page-title">Les produits</div>
                <div className="product-grid">
                    {products.map((product)=>(
                        <ProductCard product={product} key={product.key} />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}