import React, { useState, createContext } from "react"

export const CustomerCandyContext = createContext()


export const CustomerCandyProvider = (props) => {
    const [customerCandys, setCustomerCandys] = useState([])

    const getCustomerCandys = () => {
        return fetch("https://kandy-korner-48-api.herokuapp.com/customerCandys?_expand=product&_expand=customer")
        .then(res => res.json())
        .then((data) => setCustomerCandys(data))
    }


    const addCustomerCandy = customerCandyObj => {
        return fetch("https://kandy-korner-48-api.herokuapp.com/customerCandys", {
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