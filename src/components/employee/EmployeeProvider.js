import React, { useState, createContext } from "react"

export const EmployeeContext = createContext()


export const EmployeeProvider = (props) => {
    const [employees, setEmployee] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
        .then((data) => setEmployee(data))
    }

    const addEmployee = employeeObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }


    const removeEmployee = employeeId => {
        return fetch(`http://localhost:8088/employees/${employeeId}`, {
            method: "DELETE"
        })
        .then(getEmployees)
    }

    return (
        <EmployeeContext.Provider value={
            {
                employees, getEmployees, addEmployee, removeEmployee
            }
        }>
            {props.children}
        </EmployeeContext.Provider>
    )
}