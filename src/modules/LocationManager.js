const remoteURL = "http://localhost:5002"

export const getLocationById = (locationId) => {
    return fetch(`${remoteURL}/locations/${locationId}?_expand=name&_expand=address`)
    .then(res => res.jsom())
}

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
    .then(res => res.json())
  } 