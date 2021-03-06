import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"


export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])


    return (
        <>
            <h1 className="locations__title">Current Locations</h1>
            <section className="locations">
                {
                    locations.map(location => {
                        return (
                            <div className="location" key={location.id} id={`location--${location.id}`}>
                                <div className="location__name">
                                    <b>Name:</b> {location.name}
                                </div>
                                <div className="location__address">
                                    <b>Address:</b> {location.address}
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}