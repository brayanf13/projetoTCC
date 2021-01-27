const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const unity = await connection('unity').select('*');

        if (request.query.search) {
            
            const search = String(request.query.search);
    
            const filteredModule = search ? unity.filter(unity => unity.name.includes(search)) : unity;
            // console.log(request.query.search ? 'foi' : 'não foi')
            return response.json(filteredModule);
        } else {
            // console.log(request.query.search ? 'foi' : 'não foi')
            return response.json(unity);
        }
    },

    async create(request, response) {
        const { image_url, name, content, module_id } = request.body;

        await connection('unity').insert({
            image_url,
            name,
            content,
            module_id
        })

        return response.json(" funcionou topper");
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('unity').where('id', id).delete();

        return response.status(204).send();
    },

    async update(request, response) {
        const { id } = request.params;
        const { image_url, name, content, module_id } = request.body;

        await connection('unity')
            .where({ id: id })
            .update({ image_url: image_url, name: name, content: content, module_id: module_id }, [image_url, name, content, module_id]);

        return response.status(204).send();
    }
}