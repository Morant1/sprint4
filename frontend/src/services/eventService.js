
import httpService from './httpService';

export const eventService = {
    query,
    getById,
    remove,
    save
}

function query(filterBy) {
    let queryStr ='?';

    for (const key in filterBy) {
        queryStr += `${key}=${filterBy[key]}&`;

    }
    return httpService.get(`event${queryStr || ''}`);
  }

  
async function getById(eventId) {
    const eventi = await httpService.get(`event/${eventId}`);
    return eventi

}

function remove(eventId) {
    return httpService.delete(`event/${eventId}`);
  }


//Updating/Creating new event
async function save(eventi) {
    if (eventi._id) {
        const editedEventi  = await httpService.put(`event/${eventi._id}`, eventi);
        return editedEventi
    } else {
        const addedEventi  = await httpService.post(`event`, eventi);
        console.log("addEventi",addedEventi)
        return addedEventi
    }
}


// import axios from 'axios'
// const BASE_URL = 'http://localhost:3000/eventi'


// export const eventService = {
//     query,
//     getById,
//     remove
// }

// function query(filterBy) {
//     return axios.get(`${BASE_URL}`)
//         .then(res => res.data)
// }

// function getById(itemId) {
//     return axios.get(`${BASE_URL}/${itemId}`)
//         .then(res => res.data)

// }

// function remove(itemId) {
//     return axios.delete(`${BASE_URL}/${itemId}`)
// }

