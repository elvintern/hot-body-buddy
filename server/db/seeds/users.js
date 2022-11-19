exports.seed = async function (knex) {
  await knex('users').del()
  await knex('users').insert([
    { id: 1, user_name: 'Jinwoo Park' },
    { id: 2, user_name: 'Ahmad' },
    { id: 3, user_name: 'Richard' },
  ])
}
