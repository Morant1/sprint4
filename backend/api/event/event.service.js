
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const moment = require('moment');


module.exports = {
    query,
    getById,
    remove,
    update,
    add
}



async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('eventi')
    try {
        const events = await collection.find(criteria).toArray();
        return _sortFilterEvents(events, filterBy.date, filterBy.sort, filterBy.order)

    } catch (err) {
        console.log('ERROR: cannot find events')
        throw err;
    }
}


function _sortFilterEvents(events, date, sort, order) {
    console.log("events:", events, "Date:", date, "sort:", sort, "order:", order)

    if (!sort & !date & !order) return events;
    let sortedEvents;
    const todayStr = moment(Date.now()).format('L')

    // DATES
    // switch(date) {
    //     case date === 'all':
    //         sortedEvents = events;
    //       break;
    //     case date === 'today':
    //         sortedEvents = events.filter(eventi => {
    //             return moment(eventi.startsAt).format('L') === todayStr;
    //         })
    //       break;
    //       case date === 'week':
    //         sortedEvents = events.filter(eventi => {
    //             return moment(eventi.startsAt).isSame(Date.now(),'week');
    //         })
    //       break;
    //       case date === 'month':
    //         sortedEvents = events.filter(eventi => {
    //             return moment(eventi.startsAt).isSame(Date.now(),'week');
    //         })
    //       break;
    //       case date === 'year':
    //         sortedEvents = events.filter(eventi => {
    //             return moment(eventi.startsAt).isSame(Date.now(),'year');
    //         })
    //       break;
    //   }

    if (date === 'all') sortedEvents = events;
    if (date === 'today') {
        sortedEvents = events.filter(eventi => {
            return moment(eventi.startsAt).format('L') === todayStr;
        })
    }
    if (date === 'week') {
        sortedEvents = events.filter(eventi => {
            return moment(eventi.startsAt).isSame(Date.now(),'week');
        })
    }
    if (date === 'month') {
        sortedEvents = events.filter(eventi => {
            return moment(eventi.startsAt).isSame(Date.now(),'week');
        })
    }
    if (date === 'year') {
        sortedEvents = events.filter(eventi => {
            return moment(eventi.startsAt).isSame(Date.now(),'year');
        })
    }

    //ORDER
    if (order === 'desc' || sort === 'date') {
        sortedEvents = sortedEvents.sort((a, b) => {
            return a['startsAt'] > b['startsAt'] ? -1 : a['startsAt'] < b['startsAt'] ? 1 : 0
        })
    }
    if (order === 'asc') {
        sortedEvents = sortedEvents.sort((a, b) => {
            return a['startsAt'] < b['startsAt'] ? -1 : a['startsAt'] > b['startsAt'] ? 1 : 0
        })
    }

    if (sort === 'rank') {
        sortedEvents = sortedEvents.sort((a, b) => {
            return a['rank'] < b['rank'] ? -1 : a['rank'] < b['rank'] ? 1 : 0
        })
    }

    if (sort === 'participants') {
        sortedEvents = sortedEvents.sort((a, b) => {
            return a['participants'].length > b['participants'].length  ? -1 : a['participants'].length  < b['participants'].length ? 1 : 0
        })
    }
    return sortedEvents;
}







async function getById(eventId) {
    const collection = await dbService.getCollection('eventi')
    try {
        const eventi = await collection.findOne({ "_id": ObjectId(eventId) })
        return eventi

    } catch (err) {
        console.log(`ERROR: while finding eventi ${eventId}`)
        throw err;
    }
}


async function remove(eventId) {
    const collection = await dbService.getCollection('eventi')
    try {
        await collection.deleteOne({ "_id": ObjectId(eventId) })
    } catch (err) {
        console.log(`ERROR: cannot remove eventi ${eventId}`)
        throw err;
    }
}




async function update(eventi) {
    const collection = await dbService.getCollection('eventi')
    eventi._id = ObjectId(eventi._id);

    try {
        await collection.replaceOne({ "_id": eventi._id }, eventi)
        return eventi
    } catch (err) {
        console.log(`ERROR: cannot update eventi ${eventi._id}`)
        throw err;
    }
}



async function add(eventi) {
    const collection = await dbService.getCollection('eventi')
    try {
        const newEventi = await collection.insertOne(eventi);
        return newEventi;
    } catch (err) {
        console.log(`ERROR: cannot insert eventi`)
        throw err;
    }
}



function _buildCriteria(filterBy) {
    console.log("filterBy",filterBy)
    const criteria = {};
    if (filterBy.title) {
        criteria.title = new RegExp(filterBy.title, 'ig');
    }
    return criteria;
}






