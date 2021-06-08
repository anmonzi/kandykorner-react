import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory } from 'react-router-dom'
import "./Employee.css"



export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const history = useHistory()

    useEffect(() => {
        getEmployees()
    }, [])

    //const isManager = employee.manager
    //const isFullTime = employee.isFullTime

    return (
        <>
            <h1 className="employees__title">Current Employees</h1>
            <div className="employee_flex">
                <button className="employee__button" onClick={() => history.push("/employees/create")}>
                    Add Employee
                </button>
            </div>

            <div className="employees">
                {
                    employees.map(employee =>
                        <div className="employee" key={employee.id} id={`employee--${employee.id}`}>
                            <div className="employee__name">
                                Employee Name: { employee.name } 
                            </div>
                            <div className="employee__location">
                                Works at: { employee.location.name }
                            </div>
                            <div className="employee__position">
                                Is a manager: { 
                                    employee.manager
                                    ? "Yes"
                                    : "No"
                                    }
                            </div>
                            <div className="employee__fullTime">
                                Works Full-Time: { 
                                    employee.fullTime
                                    ? "Yes"
                                    : "No"
                                    }
                            </div>
                            <div className="employee__hourlyRate">
                                { employee.name } makes ${ employee.hourlyRate } an hour
                            </div>
                        </div>
                        )
                }
            </div>
        </>
    )
}