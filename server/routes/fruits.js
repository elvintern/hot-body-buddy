const express = require('express')

const db = require('../db')

const router = express.Router()

module.exports = router

// GET /api/v1/fruits
router.get('/home', async (req, res) => {
  try {
    let randNum = Math.floor(Math.random() * 3) + 1
    const fruits = await db.getFruits(randNum)
    res.json(fruits)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to fetch fruits' })
  }
})
