const Project = require('../models/project.model');

exports.project_create = function (req, res) {
    let project = new Project(
        {
            title: req.body.title
        }
    )

    project.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(201).send('Project Created Successfully');
    })
}

exports.getAll = function (req, res) {
    Project.find((err, projects) => {
        if(err) return next(err);
        res.status(200).send(projects);
    })
}