exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        {
          name: 'Samwise Gamgee',
          bio: 'Gardener and poet. Married to Rose Cotton',
          file: 'https://res.cloudinary.com/ndurbin/image/upload/v1576706788/webapi1/samwise_gamgee_wiabru.jpg'
        },
        {
          name: 'Frodo Baggins',
          bio: 'The ring bearer',
          file: 'https://res.cloudinary.com/ndurbin/image/upload/v1576706788/webapi1/frodo_embx2f.jpg'
        },
        {
          name: 'Bilbo Baggins',
          bio: 'Storyteller. Adventure seeker. Old.',
          file: 'https://res.cloudinary.com/ndurbin/image/upload/v1576706788/webapi1/biblo_cdvn47.png'
        },
      ]);
    });
};