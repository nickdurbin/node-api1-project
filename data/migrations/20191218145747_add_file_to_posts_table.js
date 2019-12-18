exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(users) {
    users.text('file');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(users) {
    users.dropColumn('file')
  });
};