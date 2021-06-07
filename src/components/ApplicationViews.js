import { Route } from "react-router"
import { LandingPage } from "./landing/LandingPage"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"


export const ApplicationViews = () => {
    return (
        <>
            {/* LANDING PAGE */}
            <Route exact path="/">
                <LandingPage />
            </Route>

            {/* RENDER LOCATIONS */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* RENDER PRODUCTS */}
            <ProductProvider>
                <Route exact path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>

        </>
    )
}