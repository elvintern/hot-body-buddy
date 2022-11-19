import request from 'superagent'

export function fetchFruits() {
  return request.get('/api/v1/fruits').then((res) => res.body)
}

export function fetchUsers() {
  return request.get('/api/v1/users').then((res) => res.body)
}
