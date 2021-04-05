import React from "react";
import { Home } from './Home';
import { Route } from "react-router-dom";
import { AnimalCard } from "./animal/AnimalCard";
import { EmployeeCard } from "./employee/EmployeeCard";
import { CustomerCard } from "./customer/CustomerCard";
import { LocationCard } from "./location/LocationCard"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/animals">
                <AnimalCard />
            </Route>

            <Route path="/locations">
                <LocationCard />
            </Route>

            <Route path="/employees">
                <EmployeeCard />
            </Route>

            <Route path="/customers">
                <CustomerCard />
            </Route>
        </>
    )
}