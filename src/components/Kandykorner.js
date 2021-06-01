import React from "react"
import "./Kandykorner.css"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"

export const KandyKorner = () => (
    <>
        <h2>Welcome to KandyKorner</h2>
            <small>Where nothing is too Sweet.</small>

            <address>
                <div>Visit Us at our Nashville Location</div>
                <div>2893 Kandy Way</div>
            </address>

            <h2>Locations</h2>
                <article className="locations">
                <LocationProvider>
                    <LocationList />
                </LocationProvider>
                </article>

            <h2>Products</h2>
                <article className="products">
                <ProductProvider>
                    <ProductList />
                </ProductProvider>
                </article>
    </>
)