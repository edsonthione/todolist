const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

const app = express();
const port = 3000;

const sequelize = require('./config/database');
const Task = require('./models/task');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base MySQL réussie !');
    await sequelize.sync(); // crée la table Tasks si elle n'existe pas

    // Routes
    app.get('/', async (req, res) => {
      const tasks = await Task.findAll();
      res.render('index', { tasks });
    });

    app.get('/add', (req, res) => {
      res.render('add');
    });

    app.post('/add', async (req, res) => {
      await Task.create({ title: req.body.title });
      res.redirect('/');
    });

    app.get('/edit/:id', async (req, res) => {
      const task = await Task.findByPk(req.params.id);
      res.render('edit', { task });
    });

    app.put('/edit/:id', async (req, res) => {
      const task = await Task.findByPk(req.params.id);
      task.title = req.body.title;
      await task.save();
      res.redirect('/');
    });

    app.delete('/delete/:id', async (req, res) => {
      await Task.destroy({ where: { id: req.params.id } });
      res.redirect('/');
    });

    app.listen(port, () => {
      console.log(`App en écoute sur http://localhost:${port}`);
    });

  } catch (error) {
    console.error('Impossible de se connecter à la base de données :', error);
  }
}

startServer();
