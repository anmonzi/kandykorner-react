import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useHistory } from 'react-router-dom'




export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext) // object deconstruction
    const { locations, getLocations } = useContext(LocationContext)
    const history = useHistory()

    const [employee, setEmployee] = useState({  // holds data -establishes the variable to hold state - any time state changes JSX is re-rendered
        name: "",
        locationId: 0,
        manager: "",
        fullTime: "",
        hourlyRate: 0
    })

    useEffect(() => {  // do something when state changes - initial render of the app is a state change
        getLocations()
    }, [])

    const handleUserInputChange = (event) => {
        const newEmployee = {...employee}
        newEmployee[event.target.id] = event.target.value
        setEmployee(newEmployee)
    }


    const handleClickSaveEmployee = (event) => {
        event.preventDefault()

        if (parseInt(employee.locationId) === 0) {
            alert("Please select a location")
        } else {
            const newEmployee = {
                name: employee.name,
                locationId: parseInt(employee.locationId),
                manager: employee.manager,
                fullTime: employee.fullTime,
                hourlyRate: employee.hourlyRate
            }
            addEmployee(newEmployee)
                .then(() => history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
        <h2 className="employeeForm__title">New Employee</h2>
        <fieldset>
            <div className="form-group">
            <label htmlFor="name">Employee name:</label>
            <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee name" value={employee.name} onChange={handleUserInputChange} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="manager">Is Employee a manager?</label>
            <input type="text" id="manager" required autoFocus className="form-control" placeholder="Yes or No" value={employee.manager} onChange={handleUserInputChange} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="fullTime">Is Employee Full Time?</label>
            <input type="text" id="fullTime" required autoFocus className="form-control" placeholder="Yes or No" value={employee.fullTime} onChange={handleUserInputChange} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="hourlyRate">Hourly Rate</label>
            <input type="number" id="hourlyRate" required autoFocus className="form-control" value={employee.hourlyRate} onChange={handleUserInputChange} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="employee">Assign to a Location: </label>
            <select name="locationId" id="locationId" className="form-control" value={employee.locationId} onChange={handleUserInputChange}>
                <option value="0">Select a location</option>
                {locations.map(l => (
                <option key={l.id} value={l.id}>
                    {l.name}
                </option>
                ))}
            </select>
            </div>
        </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
                Add New Employee
            </button>
        </form>
    )
}