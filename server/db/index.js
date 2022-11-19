const connection = require('./connection')

module.exports = {
  getFruits,
  getUsers,
}

function getFruits(db = connection) {
  const randomNumber = Math.floor(Math.random() * 5) + 1
  console.log(randomNumber)
  return db('fruits').where('id', randomNumber).select()
}

function getUsers(db = connection) {
  return db('users').select('id', 'user_name as userName')
}
