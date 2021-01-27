const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const login = await connection('login').select('*');

        return response.json(login);
    },

    async create(request, response) {
        const { user, password } = request.body;

        await connection('login').insert({
            user,
            password
        })

        return response.status(204).send();

    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('login').where('id', id).delete();

        return response.status(204).send();
    },
}