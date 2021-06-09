import React, { useState, createContext } from "react"

export const EmployeeContext = createContext()


export const EmployeeProvider = (props) => {
    const [employees, setEmployee] = useState([])

    const getEmployees = () => {
        return fetch("https://kandy-korner-48-api.herokuapp.com/employees?_expand=location")
        .then(res => res.json())
        .then((data) => setEmployee(data))
    }

    const addEmployee = employeeObj => {
        return fetch("https://kandy-korner-48-api.herokuapp.com/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }

    const getEmployeeById = employeeId => {
        return fetch(`https://kandy-korner-48-api.herokuapp.com/employees/${employeeId}`)
        .then(res => res.json())
    }

    const updateEmployee = employee => {
        return fetch(`https://kandy-korner-48-api.herokuapp.com/employees/${employee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(getEmployees)
    }


    const removeEmployee = employeeId => {
        return fetch(`https://kandy-korner-48-api.herokuapp.com/employees/${employeeId}`, {
            method: "DELETE"
        })
        .then(getEmployees)
    }

    return (
        <EmployeeContext.Provider value={
            {
                employees, getEmployees, addEmployee, removeEmployee, updateEmployee, getEmployeeById
            }
        }>
            {props.children}
        </EmployeeContext.Provider>
    )
}