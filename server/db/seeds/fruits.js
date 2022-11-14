exports.seed = async function (knex) {
  await knex('fruits').del()
  await knex('fruits').insert([
    { id: 1, name: 'no pain no gain' },
    { id: 2, name: 'A year from now you may wish you had started today.' },
    { id: 3, name: 'Look in the mirror. That’s your competition.' },
    {
      id: 4,
      name: "Wheter you think you can, or you think you can't, you're right",
    },
    { id: 5, name: 'Get comfortable with being uncomfortable!' },
  ])
}
