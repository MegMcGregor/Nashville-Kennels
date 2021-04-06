import React, { useState, useEffect } from "react";
import { getAllCustomers, getCustomerById } from "../../modules/CustomerManager"
import { CustomerCard } from "./CustomerCard"

export const CustomerList = () => {

    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI)
        });
    };

    useEffect(() => {
        getCustomers();
    }, []);

    return (
        <div className="customer=cards">
            {customers.map(customer =>
                 <CustomerCard key={customer.id} customer={customer} />)}
        </div>
    );
};