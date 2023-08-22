const data = require('./data.json')


module.exports = {
    sendData: async (req, res) => {
        const dados = data;

        res.status(200).send(dados);
    }
}