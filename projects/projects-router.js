const express = require('express');

const db = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to get projects',
                error: err 
            });
        });
  });  

router.get('/tasks', (req, res) => {
    db.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(500).json({ 
                message: 'Failed to get tasks', 
                error: err 
            });
        });
});
  
router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    db.getTasksById(id)
        .then(tasks => {
            if (steps.length) {
                res.status(200).json(tasks);
            } else {
                res.status(404).json({ 
                    message: 'Could not find tasks for given project' 
                })
            }
        })
        .catch(err => {
            res.status(500).json({ 
                message: 'Failed to get tasks', 
                error: err 
            });
        });
});

router.get('/resources', (req, res) => {
    db.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({ 
                message: 'Failed to get resources', 
                error: err 
            });
        });
});

router.get('/:id/resources', (req, res) => {
    const { id } = req.params;

    db.getResourcesById(id)
        .then(resources => {
            if (resources.length) {
                res.status(200).json(resources);
            } else {
                res.status(404).json({ 
                    message: 'Could not find resources for given project' 
                })
            }
        })
        .catch(err => {
            res.status(500).json({ 
                message: 'Failed to get resources', 
                error: err 
            });
        });
});

router.post('/', (req, res) => {
    const newProject = req.body;
  
    db.add(newProject)
        .then(project => {
            res.status(201).json(project);
        })
        .catch (err => {
            res.status(500).json({ 
                message: 'Failed to create new project', 
                error: err
            });
        });
  });
  
  router.post('/new-task', (req, res) => {
    const newTask = req.body;

    db.addTask(newTask)
        .then(task => {
            res.status(201).json(task);
        })
        .catch (err => {
            res.status(500).json({ 
                message: 'Failed to create new step',
                error: err,
            });
        });
  });

  router.post('/new-resource', (req, res) => {
    const newResource = req.body;

    db.addResource(newResource)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch (err => {
            res.status(500).json({ 
                message: 'Failed to create new resource',
                error: err,
            });
        });
  });

module.exports = router;