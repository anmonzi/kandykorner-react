import Reach, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import "./Product.css"


export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <>
            <h1 className="products__title">Current Products</h1>
            
            <section className="products">
                {
                    products.map(product => {
                        return (
                            <div className="product" key={product.id} id={`product--${product.id}`}>
                                <div className="product__name">
                                    Product Name: {product.name}
                                </div>
                                <div className="product__price">
                                    Price: ${product.price}
                                </div>
                                <div className="product__type">
                                    Type: {product.productType.type}
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}