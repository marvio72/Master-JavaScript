'use strict';

var Project = require('../models/project');

var controller = {

  home: function(req, res){
    return res.status(200).send({
      message: 'Soy la home'
    });
  },

  test: function(req, res){
    return res.status(200).send({
      message: 'Soy el metodo o accion test del controlador de project'
    });
  },

  saveProject: function(req, res){
    var project = new Project();
    var params = req.body;

    // Dar valores por post de los campos de la base de datos

    project.name = params.name;
    project.description = params.description;
    project.category = params.category;
    project.year = params.year;
    project.langs = params.langs;
    project.image = null;

    // Meter la información a la base de datos
    project.save((err, projectStored) => {
      if(err) return res.status(500).send({
        message: 'Error al guardar'
      });

      if(!projectStored) return res.status(404).send({
        message: 'No se ha podido guardar el proyecto'
      });

      return res.status(200).send({
        project: projectStored
      });

    });
  },

  //solicitar información de la base de datos a través del id
  getProject: function(req, res){
    var projectId = req.params.id;

    if (projectId == null) return res.status(404).send({
      message: 'El proyecto no existe'
    });
    
    Project.findById(projectId,(err, project) =>{

      if(err) return res.status(500).send({message: 'Error al devolver los datos'});

      if(!project) return res.status(404).send({message: 'El proyecto no existe'});

      return res.status(200).send({
        project
      });
    });
  },

  getProjects: function(req, res){

    Project.find({}).sort('+year').exec((err, project)=>{

      if(err) return res.status(500).send({message: 'Error al devolver los datos'});

      if (!project) return res.status(404).send({
        message: 'No hay projectos para mostrar'
      });

      return res.status(200).send({
        project
      });
    });
  },

  updateProject: function(req, res){
    var projectId = req.params.id;
    var update = req.body;

    Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) => {

      if(err) return res.status(500).send({message: 'Error al Actualizar'});

      if(!projectUpdated) return res.status(404).send({message: 'No existe el proyecto'});

      return res.status(200).send({
        project: projectUpdated
      });


    });
  },

  deleteProject: function(req, res){
    var projectId = req.params.id;

    Project.findByIdAndRemove(projectId, (err, projectRemoved)=>{
      
      if(err) return res.status(500).send({message: 'Error al Borrar'});

      if(!projectRemoved) return res.status(404).send({message: 'No existe el proyecto'});

      return res.status(200).send({
        project: projectRemoved
      });
    });
  },

  uploadImage: function(req, res){
    let projectId = req.params.id;
    let fileName = 'Imagen no subida...';

    if(req.files){
      let filePath  = req.files.image.path;
      let fileSplit = filePath.split('/');
      let fileName  = fileSplit[1];

      Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) => {
        
        if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

        if(!projectUpdated) return res.status(404).send({message: 'No se encontro la imagen'});

        return res.status(200).send({
          project: projectUpdated
        });
      });

    }else{
      return res.status(200).send({
        message: fileName
      });
    }
  }
};

module.exports = controller;