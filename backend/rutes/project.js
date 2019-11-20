'use strict';

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
// El ? indica que el parametro es opcional
router.get('/project/:id?', ProjectController.getProject);
// Despliega lista de proyectos.
router.get('/projects', ProjectController.getProjects);

module.exports = router;