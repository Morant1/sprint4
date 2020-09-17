const express = require('express')
const {requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getEvents, getEventi, deleteEventi, updateEventi,addEventi} = require('./event.controller')
const router = express.Router()


router.get('/', getEvents)
router.get('/:id', getEventi)
router.put('/:id',requireAdmin, updateEventi)
router.post('/',requireAdmin, addEventi)
router.delete('/:id',requireAdmin, deleteEventi)

module.exports = router
