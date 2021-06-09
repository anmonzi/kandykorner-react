import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "./ProductProvider"
import { CustomerCandyContext } from "../customerCandy/CustomerCandyProvider"
import "./Product.css"
import { ProductSearch } from "./ProductSearch"

export const ProductList = () => {
    const { products, getProducts, searchTerms } = useContext(ProductContext)
    const { addCustomerCandy } = useContext(CustomerCandyContext)

    const [ filteredCandys, setFilteredCandys ] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = products.filter(product => product.name.toLowerCase().includes(searchTerms))
            setFilteredCandys(subset)
        } else {
            setFilteredCandys(products)
        }
    }, [searchTerms, products])


    return (
        <>
            <h1 className="products__title">Current Products</h1>
            { ProductSearch() }
            
            <section className="products">
                {
                    filteredCandys.map(product => {
                        return (
                            <div className="product" key={product.id} id={`product--${product.id}`}>
                                <div className="product__name">
                                    <b>Product Name:</b> {product.name}
                                </div>
                                <div className="product__price">
                                    <b>Price:</b> ${product.price.toFixed(2)}
                                </div>
                                <div className="product__type">
                                    <b>Type:</b> {product.productType.type}
                                </div>
                                <br></br>
                                <button 
                                onClick={event => {
                                    addCustomerCandy({
                                        customerId: parseInt(localStorage.getItem("kandy_customer")),
                                        productId: product.id
                                    })
                                }}>Add to order</button>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}