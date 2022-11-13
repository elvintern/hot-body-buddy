const connection = require('./connection')

module.exports = {
  getFruits,
}

function getFruits(id, db = connection) {
  return db('fruits').where('id', id).select()
}
