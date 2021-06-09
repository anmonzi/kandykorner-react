import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory } from 'react-router-dom'
import "./Employee.css"



export const EmployeeList = () => {
    const { employees, getEmployees, removeEmployee } = useContext(EmployeeContext)
    const history = useHistory()

    useEffect(() => {
        getEmployees()
    }, [])

    
    return (
        <>
            <h1 className="employees__title">Current Employees</h1>
            <div className="employee_flex">
                <button className="add__button" onClick={() => history.push("/employees/create")}>
                    Add Employee
                </button>
            </div>

            <div className="employees">
                {
                    employees.map(employee =>
                        <div className="employee" key={employee.id} id={`employee--${employee.id}`}>
                            <div className="employee__name">
                                <b>Employee Name:</b> { employee.name } 
                            </div>
                            <div className="employee__location">
                                <b>Works at:</b> { employee.location.name }
                            </div>
                            <div className="employee__position">
                                <b>Is a manager:</b> { 
                                    employee.manager
                                    ? "Yes"
                                    : "No"
                                    }
                            </div>
                            <div className="employee__fullTime">
                                <b>Works Full-Time:</b> { 
                                    employee.fullTime
                                    ? "Yes"
                                    : "No"
                                    }
                            </div>
                            <div className="employee__hourlyRate">
                                { employee.name } makes ${ employee.hourlyRate } an hour
                            </div>
                            <br></br>
                            <button className="fire__button" onClick={() => {
                                removeEmployee(employee.id)
                                history.push("/employees")
                            }}>Fire Employee</button>
                        </div>
                        )
                }
            </div>
        </>
    )
}