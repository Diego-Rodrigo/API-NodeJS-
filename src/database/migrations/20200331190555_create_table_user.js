
exports.up = function(knex) {
return knex.schema.createTable('users', function(table){
    table.increments('ID').primary();
    table.string('EMAIL').notNullable();
    table.string('PASSWORD').notNullable();
    table.string('DATE_CREATE').notNullable();


    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
