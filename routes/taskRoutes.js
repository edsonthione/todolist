const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Afficher toutes les tâches
router.get('/', async (req, res) => {
  const tasks = await Task.findAll();
  res.render('index', { tasks });
});

// Ajouter une tâche
router.post('/add', async (req, res) => {
  await Task.create({ title: req.body.title });
  res.redirect('/');
});

// Modifier une tâche
router.post('/edit/:id', async (req, res) => {
  await Task.update({ title: req.body.title }, { where: { id: req.params.id } });
  res.redirect('/');
});

// Marquer une tâche comme terminée
router.post('/complete/:id', async (req, res) => {
  await Task.update({ completed: true }, { where: { id: req.params.id } });
  res.redirect('/');
});

// Supprimer une tâche
router.post('/delete/:id', async (req, res) => {
  await Task.destroy({ where: { id: req.params.id } });
  res.redirect('/');
});

module.exports = router;