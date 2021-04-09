import React, { useState, useEffect } from "react";
import { AnimalCard } from "./AnimalCard";
import { deleteAnimal, getAllAnimals, getAnimalById } from "../../modules/AnimalManager";
import { useHistory } from "react-router-dom"
import { findByLabelText } from "@testing-library/react";

export const AnimalList = () => {

   let history = useHistory();

    const [animals, setAnimals] = useState([]);

    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI => {
            setAnimals(animalsFromAPI)
        });
    };

    useEffect(() => {
        getAnimals();
    }, []);

    const handleDeleteAnimal = id => {
        deleteAnimal(id)
            .then(() => getAllAnimals().then(setAnimals));
    };

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/animals/create") }}>
                    Admit Animal
                </button>
            </section>
            <div className="container-cards">
                {animals.map(animal =>
                    <AnimalCard
                        key={animal.id}
                        animal={animal}
                        handleDeleteAnimal={handleDeleteAnimal} />
                )}
            </div>
        </>
    );
};
