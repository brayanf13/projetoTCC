const knex = require('knex');
const connection = require('../connection')

export async function seed(connection){
    await connection('items').insert([
      { user: 'admin', password: 'admin' },
    ])
  }