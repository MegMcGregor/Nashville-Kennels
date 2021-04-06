import React from "react";
import { Home } from './Home';
import { Route } from "react-router-dom";
// import { AnimalCard } from "./animal/AnimalCard";
// import { EmployeeCard } from "./employee/EmployeeCard";
// import { CustomerCard } from "./customer/CustomerCard";
import { LocationCard } from "./location/LocationCard"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/animals">
                <AnimalList />
            </Route>

            <Route path="/locations">
                <LocationCard />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/customers">
                 <CustomerList />
            </Route>
        </>
    )
}