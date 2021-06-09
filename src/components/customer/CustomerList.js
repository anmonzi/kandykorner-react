import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"




export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)
    
    
    useEffect(() => {
        getCustomers()
    }, [])

    customers.sort((a, b) => {
        return b.customerCandys.length - a.customerCandys.length
    })

    return (
        <>
            <h1 className="customers__title">Current Customers</h1>

            <div className="customers">
                {
                    customers.map(customer => 
                        <div className="customer" key={customer.id} id={`customer--${customer.id}`}>
                            <div className="customer__name">
                                <b>Customer Name:</b> {customer.name}
                            </div>
                            <div className="customer__email">
                                <b>Email:</b> {customer.email}
                            </div>
                            <div className="customer__email">
                                {customer.name} has purchased {customer.customerCandys.length} candies.
                            </div>
                        </div>    
                    )
                }
            </div>
        </>
    )
}