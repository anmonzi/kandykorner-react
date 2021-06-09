import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useHistory, useParams } from 'react-router-dom'




export const EmployeeForm = () => {
    const { addEmployee, getEmployeeById, updateEmployee } = useContext(EmployeeContext) // object deconstruction
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const history = useHistory()
    const {employeeId} = useParams()
    

    // const [employee, setEmployee] = useState({  // holds data -establishes the variable to hold state - any time state changes JSX is re-rendered
    //     name: "",
    //     locationId: 0,
    //     manager: false,
    //     fullTime: false,
    //     hourlyRate: 0
    // })

    const handleUserInputChange = (event) => {
        const newEmployee = {...employee}
        newEmployee[event.target.id] = event.target.value
        setEmployee(newEmployee)
    }


    const handleClickSaveEmployee = () => {

        const locationId = parseInt(employee.locationId)
        const hourlyRate = parseFloat(employee.hourlyRate)
        const manager = employee.manager
        const fullTime = employee.fullTime

        if (parseInt(employee.locationId) === 0) {
            alert("Please select a location")
        } else {
            setIsLoading(true)
            if (employeeId) {
                //PUT - update employee
                updateEmployee({
                    id: employee.id,
                    name: employee.name,
                    locationId: locationId,
                    manager: manager,
                    fullTime: fullTime,
                    hourlyRate: hourlyRate
                })
                .then(() => history.push("/employees"))
            } else {
                //POST - add new employee
                addEmployee({
                    name: employee.name,
                    locationId: locationId,
                    manager: manager,
                    fullTime: fullTime,
                    hourlyRate: hourlyRate
                })
                .then(() => history.push("/employees"))
            }
        }
    }

    // Get locations. If employeeId is in the URL, getEmployeeById
    useEffect(() => {  // do something when state changes - initial render of the app is a state change
        getLocations().then(() => {
            if (employeeId) {
                getEmployeeById(employeeId)
                .then(employee => {
                    setEmployee(employee)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })
    }, [])




    return (
        <form className="employeeForm">
        <h2 className="employeeForm__title">New Employee</h2>
        <fieldset>
            <div className="form-group">
            <label htmlFor="name">Employee name:</label>
            <input type="text" id="name" name="name" required autoFocus className="form-control" placeholder="Employee name" value={employee.name} onChange={handleUserInputChange} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="manager">Manager: </label>
            <select name="manager" id="manager" name="manager"className="form-control" value={employee.manager} onChange={handleUserInputChange}>
                        <option value="0">Select an option</option>
                        <option key={true} value={true}>Yes</option>
                        <option key={false} value={false}>No</option>
                    </select>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="fullTime">Full-Time: </label>
            <select name="fullTime" id="fullTime" name="fullTime" className="form-control" value={employee.fullTime} onChange={handleUserInputChange}>
                        <option value="0">Select an option</option>
                        <option key={true} value={true}>Yes</option>
                        <option key={false} value={false}>No</option>
                    </select>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="hourlyRate">Hourly Rate</label>
            <input type="number" id="hourlyRate" name="hourlyRate" required autoFocus className="form-control" value={employee.hourlyRate} onChange={handleUserInputChange} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="employee">Assign to a Location: </label>
            <select name="locationId" id="locationId" name="locationId" className="form-control" value={employee.locationId} onChange={handleUserInputChange}>
                <option value="0">Select a location</option>
                {locations.map(l => (
                <option key={l.id} value={l.id}>
                    {l.name}
                </option>
                ))}
            </select>
            </div>
        </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading} 
                onClick={event => {
                    event.preventDefault()
                    handleClickSaveEmployee()
                }}>
                {employeeId ? <>Save Employee</> : <>Add New Employee</>}
            </button>
        </form>
    )
}