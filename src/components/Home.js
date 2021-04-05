import React from "react";
import { AnimalCard } from "./animal/AnimalCard";
import { LocationCard } from "./location/LocationCard";
import { CustomerCard} from "./customer/CustomerCard";
import { EmployeeCard } from "./employee/EmployeeCard";
import "./Kennel.css";
import { PropsAndState } from "./PropsAndState";

export const Home = () => (
    <> 
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName="Meg" />
    </>    
)