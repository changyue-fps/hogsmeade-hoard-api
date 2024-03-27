const knex = require('knex')(require('../knexfile'));

const index = async (req, res) => {
    try {
        const data = await knex("shops");
        res.status(200).json(data);
    } catch(err) {
        res.status(400).send(`Error retrieving shops: ${err}`)
    }
}

const findOne = async (req, res) => {
    try {
        const shopFound = await knex('shops')
            .where({ id: req.params.id });
        
        if (shopFound.length === 0) {
            return res.status(404).json({
                message: `Shop with id ${req.params.id} not found`
            });
        }

        const shopData = shopFound[0];
        res,json(shopData);
    } catch (error) {
        res.status(500).json({
            message: `Unable to retrieve shop data with id ${req.params.id}`,
        })
    }
}

module.exports = {
    index,
    findOne,
}