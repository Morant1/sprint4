const express = require('express')
const {requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getEvents, getEventi, deleteEventi, updateEventi,addEventi} = require('./event.controller')
const router = express.Router()



router.get('/', getEvents)
router.get('/:id', getEventi)
router.put('/:id', updateEventi)
router.post('/', addEventi)
router.post('/comment/:id',requireAdmin)
router.delete('/:id', deleteEventi)

module.exports = router
