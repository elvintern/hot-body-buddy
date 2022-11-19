const express = require('express')

const db = require('../db')

const router = express.Router()

module.exports = router

// GET /api/v1/users
router.get('/', async (req, res) => {
  try {
    const users = await db.getUsers()
    res.json(users)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to fetch fruits' })
  }
})
