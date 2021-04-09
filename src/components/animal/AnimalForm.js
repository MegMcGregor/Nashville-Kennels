import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { addAnimal } from "../../modules/AnimalManager"
import { getAllLocations } from "../../modules/LocationManager"
import { getAllCustomers } from "../../modules/CustomerManager"
import "./AnimalForm.css"

export const AnimalForm = () => {
    const [animal, setAnimal] = useState({
        name: "",
        breed: "",
        locationId: 0,
        customerId: 0
    });

    const [isLoading, setIsLoading] = useState(false);

    const [locations, setLocations] = useState([]);
    const [customers, setCustomers] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newAnimal = { ...animal }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newAnimal[event.target.id] = selectedVal
        setAnimal(newAnimal)
    }

    useEffect(() => {
        getAllLocations()
            .then(locationsFromAPI => {
                setLocations(locationsFromAPI)
            })
    }, []);

    useEffect(() => {
        getAllCustomers()
            .then(customersFromAPI => {
                setCustomers(customersFromAPI)
            })
    }, []);

    const handleClickSaveAnimal = (event) => {
        event.preventDefault()

        const locationId = animal.locationId
        const customerId = animal.customerId

        if (locationId === 0 || customerId === 0) {
            window.alert("Please select a location and customer")
        } else {
            addAnimal(animal)
                .then(() => history.push("/animals"))
        }
    }
    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Animal name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerId">Customer: </label>
                    <select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a customer</option>
                        {customers.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveAnimal}>
                Save Animal
          </button>
        </form>
    )

}