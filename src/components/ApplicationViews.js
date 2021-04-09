import React, { useState } from "react";
import { Home } from './Home';
import { Redirect, Route } from "react-router-dom";
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { AnimalForm } from "./animal/AnimalForm"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const ApplicationViews = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/animals/create">
                <AnimalForm/>
            </Route>

            <Route exact path="/animals">
                {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/login">
                <Login setAuthUser={setAuthUser}/>
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser}/>
            </Route>

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route exact path="/locations">
                <LocationList />
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