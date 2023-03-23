const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', async (_, response) => {
    const results = await User.findAll();
    response.status(200).json(results);
});

router.get('/:id', async (request, response) => {
    const id = +request.params.id;
    const results = await User.findByPk(id);
    response.status(200).json(results.dataValues);
});

router.post('/', async (request, response) => {
    const { name, email } = request.body;
    const user = await User.create({ name, email });
    response.status(201).json(user.dataValues);
});

router.put('/:id', async (request, response) => {
    const id = +request.params.id;
    const { name, email } = request.body;
    await User.update({ name, email }, { where: { id } });
    response.status(200).send(`User updated!`);
});

router.delete('/:id', async (request, response) => {
    const id = +request.params.id;
    await User.destroy({ where: { id } });
    response.status(200).send(`User deleted!`);
});

module.exports = router;
