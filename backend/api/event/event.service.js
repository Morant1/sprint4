
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add
}



async function query(filterBy = {}) {
    // const criteria = _buildCriteria(filterBy)
    // console.log("criteria",criteria)
    const collection = await dbService.getCollection('eventi')
    try {
        const events = await collection.find().toArray();
        return events
        // return _sortToys(events, filterBy.sort)

    } catch (err) {
        console.log('ERROR: cannot find events')
        throw err;
    }
}


// function _sortEvents(events, sortBy) {
//     if (!sortBy) return events
//     return toys.sort((a, b) => {
//         return a[sortBy] < b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0;
//     })

// }




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



// function _buildCriteria(filterBy) {
//     console.log("filterBy",filterBy)
//     const criteria = {};
//     if (filterBy.name) {
//         criteria.name = new RegExp(filterBy.name, 'ig');
//     }
//     if (filterBy.inStock === true || filterBy.inStock === false) {
//         criteria.inStock = filterBy.inStock
//     }

//     if (filterBy.type) {
//         criteria.type = filterBy.type
//     }

//     return criteria;
// }




