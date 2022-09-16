const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');

const niveis = require('./niveisRoute');
const turmas = require('./turmasRoute');

module.exports = app => {
  app.use(bodyParser.json());
  app.get('/', (req, res) => {
    res.status(200).send("Olá.");
  });
  app.use(
    pessoas,
    niveis,
    turmas
  );
}