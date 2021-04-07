const remoteURL = "http://localhost:5002"

export const getAnimalById = (animalId) => {
    return fetch(`${remoteURL}/animals/${animalId}?_expand=location&expand=customer`)
    .then(res => res.json())
}

export const getAllAnimals = () => {
    return fetch(`${remoteURL}/animals`)
    .then(res => res.json())
}

export const deleteAnimal = (id) => {
    return fetch(`${remoteURL}/animals/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}