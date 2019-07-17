'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Rols',
      [
        {
          name: 'PRESENTER',
          description:
            'The first to appear on the stage. The circus presenter will present the show and present each of the characters that make up the team.',
        },
        {
          name: 'CLOWNS',
          description:
            'A circus can not be complete without a group of clowns. Those who will make you laugh. Clowns are one of the most mythical and essential characters in the circus, no one can imagine without them.',
        },
        {
          name: 'JUGGLERS',
          description:
            'You practically are not able to hold 10 seconds to the lame leg and the circus tightrope walkers make unimaginable adventures. In details like this is the magic of the circus.',
        },
        {
          name: 'ACROBATS',
          description:
            'A moving poetry made in the air that will explode your imagination.',
        },
        {
          name: 'DANCERS',
          description:
            'The first to appear on the stage. The circus presenter will present the show and present each of the characters that make up the team.',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rols', null, {});
  },
};
