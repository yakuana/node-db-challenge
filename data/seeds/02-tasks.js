
exports.seed = function(knex) {
  return knex('tasks').insert([
    {task_name: 'Follow up', project_id: 1, description: 'Follow up on project from the Windows Server 2016 project to migrate/decommission servers running Windows Server 2012 and Windows Server 2012 R2', notes: '1 person', completed: false},
    {task_name: 'Sync MDM', project_id: 2, description: 'Periodically synchronizes with the management server to check for updates and apply the latest policies set by IT', notes: '10 people', completed: false},
    {task_name: 'Configure MDM', project_id: 2, description: 'Enrolls and configures the device to communicate with the enterprise management server', notes: '5 people', completed: false},
    {task_name: 'Limit access', project_id: 3, description: 'Limit whole access of the core data to student record team', notes: '6 people', completed: false},
    {task_name: 'Sits Developement', project_id: 3, description: 'Require sits development changes to manage staff roles with conditions around student group', notes: '12 people', completed: false},
    {task_name: 'Create risk management', project_id: 4, description: 'Provide the College with robust, risk managed portfolio.', notes: '20 people', completed: false},
  ])
};
 
