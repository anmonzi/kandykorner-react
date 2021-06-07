import React from "react"
import { Route } from 'react-router-dom'
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kandykorner.css"


export const KandyKorner = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)






    // <>
    //     <h2>Welcome to KandyKorner</h2>
    //         <small>Where nothing is too Sweet.</small>

    //         <address>
    //             <div>Visit Us at our Nashville Location</div>
    //             <div>2893 Kandy Way</div>
    //         </address>

    //         <h2>Locations</h2>
    //             <article className="locations">
    //             <LocationProvider>
    //                 <LocationList />
    //             </LocationProvider>
    //             </article>

    //         <h2>Products</h2>
    //             <article className="products">
    //             <ProductProvider>
    //                 <ProductList />
    //             </ProductProvider>
    //             </article>
    // </>