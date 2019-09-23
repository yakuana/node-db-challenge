
exports.seed = function(knex) {
  return knex('projects').insert([
    {project_name: 'Windows Server 2019 Migration', description: 'Working on a server.', completed: false},
    {project_name: 'Deployment of MDM Service', description: 'Deploying a service for public use', completed: false},
    {project_name: 'GDPR 2 for student systems', description: '2 years is a long time', completed: false},
    {project_name: 'Risk, Business Continuity and Disaster Recovery', description: 'Too risky.', completed: false},
  ])
};
 