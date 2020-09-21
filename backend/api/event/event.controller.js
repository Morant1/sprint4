const eventService = require('./event.service')
const logger = require('../../services/logger.service')



// GET SINGLE
async function getEventi(req, res) {
    const eventi = await eventService.getById(req.params.id)
    console.log("eventi",eventi)
    res.send(eventi)
}

 //GET LIST

async function getEvents(req, res) {
    const filterBy = req.query;
    const events = await eventService.query(filterBy)
    logger.debug(events);
    res.send(events)
}


// REMOVE
async function deleteEventi(req, res) {
    await eventService.remove(req.params.id)
    res.end()
}

//UPDATE EVENT
async function updateEventi(req, res) {
    const eventi = {...req.body};
    await eventService.update(eventi)
    res.send(eventi)
}


//UPDATE COMMENT
async function updateComments(req, res) {
    const comment = {...req.body};
    await eventService.updateComments(comment)
    res.send(comment)
}


//ADD
async function addEventi(req, res) {
    const eventi = req.body;
    // eventi.createdAt = Date.now();
    await eventService.add(eventi)
    res.send(eventi)
}

module.exports = {
    getEventi,
    getEvents,
    deleteEventi,
    updateEventi,
    updateComments,
    addEventi
}