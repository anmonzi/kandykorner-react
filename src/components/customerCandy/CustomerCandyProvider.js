import React, { useState, createContext } from "react"

export const CustomerCandyContext = createContext()


export const CustomerCandyProvider = (props) => {
    const [customerCandys, setCustomerCandys] = useState([])

    const getCustomerCandys = () => {
        return fetch("http://localhost:8088/customerCandys?_expand=product&_expand=customer")
        .then(res => res.json())
        .then((data) => setCustomerCandys(data))
    }


    const addCustomerCandy = customerCandyObj => {
        return fetch("http://localhost:8088/customerCandys", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerCandyObj)
        })
        .then(getCustomerCandys)
    }

    return (
        <CustomerCandyContext.Provider value= { 
            {
                customerCandys, getCustomerCandys, addCustomerCandy
            }
        }>
            {props.children}
        </CustomerCandyContext.Provider>
    )
}