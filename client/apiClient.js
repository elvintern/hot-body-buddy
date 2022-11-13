import request from 'superagent'

export function fetchFruits() {
  return request.get('/home').then((res) => res.body)
}
