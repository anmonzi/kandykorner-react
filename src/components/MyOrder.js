import React, { useEffect, useContext } from "react"
import { CustomerCandyContext } from "./customerCandy/CustomerCandyProvider"
import "./MyOrder.css"



export const MyOrder = () => {
    const { customerCandys, getCustomerCandys } = useContext(CustomerCandyContext)

    useEffect(() => {
        getCustomerCandys()
    }, [])

    const userOrderedProducts = customerCandys.filter(customer => 
        customer.customerId === parseInt(localStorage.getItem("kandy_customer")))

    return (
        <>
            <h1 className="myOrder__title">My Order</h1>

            <section className="myOrders">
                {
                    userOrderedProducts.map(order => {
                        return (
                        <div className="customerCandy">
                            <div className="candy__name detail">{order.product.name}</div>
                            <div className="candy__price detail">${order.product.price.toFixed(2)}</div>
                        </div>
                        )
                    })
                }
            </section>

        </>
    )
}