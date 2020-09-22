
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

