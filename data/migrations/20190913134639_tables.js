
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl
            .text('project_name')
            .unique()
            .notNullable();
        tbl
            .boolean('completed')
            .defaultTo(false);
        tbl
            .text('description');
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl
            .text('task_name')
            .unique()
            .notNullable();
        tbl
            .text('description')
            .notNullable();
        tbl
            .boolean('completed')
            .defaultTo(false)
            .notNullable();
        tbl
            .text('notes');
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl
            .text('resource_name')
            .unique()
            .notNullable();
        tbl
            .text('description')
    })
    .createTable('accessResources', tbl => {
        tbl.increments();
        tbl
            .integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('accessResource')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects');
};
