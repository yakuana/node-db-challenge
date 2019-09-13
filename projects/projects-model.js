const db = require('../data/projects-config.js'); 

module.exports = {
    getProjects,
    getTasks,
    getTasksById,
    getResources, 
    getResourcesById,
    addProject,
    addTask,
    addResource
}

function getProjects() {
    return db('projects'); 
}

function addProject(new_project) {
    return db('projects')
        .insert(new_project, 'id')
}


function getTasks() {
    return db('tasks'); 
}

function getTasksById(project_id) {
    console.log(project_id)
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .where({ project_id })
        .select('projects.project_name', 'projects.description', 'tasks.task_name', 'tasks.description', 'tasks.notes', 'tasks.completed')
}



function addTask(new_task) {
    return db('tasks')
        .insert(new_task, 'id')
}

function getResources() {
    return db('resources'); 
}

function getResourcesById(project_id) {
    return db('resources')
        .join('accessResources', 'resources.id', 'accessResources.resource_id')
        .where({ project_id })
        .select('resources.resource_name', 'resources.description')
}

function addResource(new_resource) {
    return db('resources')
        .insert(new_resource, 'id')
}