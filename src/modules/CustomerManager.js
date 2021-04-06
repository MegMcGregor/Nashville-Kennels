const remoteURL = "http://localhost:5002"

export const getCustomerById = (customerId) => {
    return fetch (`${remoteURL}/customers/${customerId}?_expand=name&_expand=address`)
    .then(res => res.json())
}

export const getAllCustomers = () => {
    return fetch (`${remoteURL}/customers`)
    .then(res => res.json())
}