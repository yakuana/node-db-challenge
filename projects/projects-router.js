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
  
router.get('/:id/projects', (req, res) => {
    const { id } = req.params;
  
    db.getResources(id)
        .then(resource => {
            if (resource) {
                res.status(200).json(resource);
            } else {
                res.status(404).json({ 
                    message: 'Could not find resource with given id.' 
                })
            }
        })
        .catch(err => {
            res.status(500).json({ 
                message: 'Failed to get shopping list', 
                error: err
            });
        });
});
  
router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    recipeDB.getTasks(id)
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

module.exports = router;