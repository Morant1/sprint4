
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
        return _sortEvents(events, filterBy.date, filterBy.sort, filterBy.order)

    } catch (err) {
        console.log('ERROR: cannot find events')
        throw err;
    }
}


function _sortEvents(events, date, sort, order) {
    console.log("events:", events, "Date:", date, "sort:", sort, "order:", order)

    if (!sort & !date & !order) return events;
    let sortedEvents;
    const todayStr = moment(Date.now()).format('L')

    // DATES
    if (date === 'all') sortedEvents = events;
    if (date === 'today') {
        sortedEvents = events.filter(eventi => {
            return moment(eventi.createdAt).format('L') === todayStr;
        })
    }
    if (date === 'week') {
        sortedEvents = events.filter(eventi => {
            return moment(eventi.createdAt).isSame(Date.now(),'week');
        })
    }
    if (date === 'month') {
        sortedEvents = events.filter(eventi => {
            return moment(eventi.createdAt).isSame(Date.now(),'month');
        })
    }
    if (date === 'year') {
        sortedEvents = events.filter(eventi => {
            return moment(eventi.createdAt).isSame(Date.now(),'year');
        })
    }

    //ORDER

    if (order === 'desc' || sort === 'date') {
        sortedEvents = sortedEvents.sort((a, b) => {
            return a['createdAt'] > b['createdAt'] ? -1 : a['createdAt'] < b['createdAt'] ? 1 : 0
        })
    }
    if (order === 'asc') {
        sortedEvents = sortedEvents.sort((a, b) => {
            return a['createdAt'] < b['createdAt'] ? -1 : a['createdAt'] > b['createdAt'] ? 1 : 0
        })
    }

    // sort

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






