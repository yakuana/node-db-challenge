const db = require('../data/projectss-config.js'); 

module.exports = {
    getProjects,
    getTasks,
    getResources
}

function getProjects() {
    return db('projects'); 
}

function getTasks(project_id) {
    console.log(project_id)
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .where({ project_id })
        .select('projects.project_name', 'projects.description', 'tasks.task_name', 'tasks.description', 'tasks.notes', 'tasks.completed')
}

function getResources(project_id) {
    return db('resources')
        .join('accessResources', 'resources.id', 'accessResources.resource_id')
        .where({ project_id })
        .select('resources.resource_name', 'resources.description')
}