const connection = require('../database/connection');
const crypto = require('crypto');

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




    // async create(request, response) {
    //     const { name, content, module_id } = request.body;

    //     // const image_url = "teste"

    //     const aux = 

    //     await connection('unity').insert({
    //         image_url,
    //         name,
    //         content,
    //         module_id
    //     })

    //     return response.json({ name });
    // },

    // routes.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
    //     const { originalname: name, size, key, location: url = "" } = req.file;

    //     const post = await Post.create({
    //       name,
    //       size,
    //       key,
    //       url
    //     });

    //     return res.json(post);
    //   });


    async create(request, response) {
        const { name, content, module_id } = request.body;
        const hash = crypto.randomBytes(6).toString('hex');
        const fileName = `${hash}-${request.file.originalname}`;
        const image_url = `http://localhost:3333/uploads/${fileName}`;

        await connection('unity').insert({
            image_url,
            name,
            content,
            module_id
        });
        return response.json(image_url);
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