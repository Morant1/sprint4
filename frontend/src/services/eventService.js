const BASE_URL = 'http://localhost:3000/eventi'

export const itemService = {
    query,
    getById,
    remove
}

function query() {
    return axios.get(`${BASE_URL}`)
        .then(res => res.data)
}

function getById(itemId) {
    return axios.get(`${BASE_URL}/${itemId}`)
        .then(res => res.data)

}

function remove(itemId) {
    return axios.delete(`${BASE_URL}/${itemId}`)
}