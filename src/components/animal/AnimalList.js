import React, { useEffect } from "react";
import { getAllAnimals } from "../../modules/AnimalManager";

export const AnimalList = () => {
    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI => {
            console.log(animalsFromAPI)
        });
    };

    useEffect(() => {
        getAnimals();
    }, []);

    return (
        <div className="container-cards">

        </div>
    );
};
