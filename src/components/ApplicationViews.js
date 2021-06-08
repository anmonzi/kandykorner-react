import { Route } from "react-router"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerCandyProvider } from "./customerCandy/CustomerCandyProvider"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LandingPage } from "./landing/LandingPage"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { MyOrder } from "./MyOrder"
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
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* RENDER PRODUCTS */}
            <ProductProvider>
                <CustomerCandyProvider>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                </CustomerCandyProvider>
            </ProductProvider>

            {/* RENDER EMPLOYEES */}
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>

                    <Route path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>

            {/* RENDER ORDERS PER USER */}
            <CustomerCandyProvider>
                <ProductProvider>
                    <Route path="/my-orders">
                        <MyOrder />
                    </Route>
                </ProductProvider>
            </CustomerCandyProvider>

            {/* RENDER ALL CUSTOMERS */}
            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}