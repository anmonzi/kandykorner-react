import React from "react"
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Kandykorner.css"



export const KandyKorner = () => (
    <>
        <Route
        render={() => {
            if (localStorage.getItem("kandy_customer")) {
            return (
                <>
                    <NavBar />
                    <ApplicationViews />
                </>
            );
            } else {
            return <Redirect to="/login" />;
            }
        }}
        />

        <Route path="/login">
        <Login />
        </Route>
        <Route path="/register">
        <Register />
        </Route>
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