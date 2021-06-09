import React, { useState, createContext } from "react"

export const LocationContext = createContext()


export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("https://kandy-korner-48-api.herokuapp.com/locations")
        .then(res => res.json())
        .then((data) => setLocations(data))
    }

    const addLocation = locationObj => {
        return fetch("https://kandy-korner-48-api.herokuapp.com/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }

    return (
        <LocationContext.Provider value= {
            {
                locations, getLocations, addLocation
            }
        }>
            {props.children}
        </LocationContext.Provider>
    )
}