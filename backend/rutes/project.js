'use strict';

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

let multipart = require('connect-multiparty');
let multipartMiddleware = multipart({ uploadDir: './uploads' });

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
// El ? indica que el parametro es opcional
router.get('/project/:id?', ProjectController.getProject);
// Despliega lista de proyectos.
router.get('/projects', ProjectController.getProjects);
// Actualiza datos de el proyecto que seleccionemos. 
router.put('/project/:id', ProjectController.updateProject);
//Borrar datos
router.delete('/project/:id', ProjectController.deleteProject);
//Imagenes
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);

module.exports = router;