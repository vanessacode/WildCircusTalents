const Users = require('./models/user');
const Rols = require('./models/rol');

const createDefaultRol = async () => {
  try {
    const numberRols = await Rols.count();

    if (numberRols === 0) {
      await Rols.bulkCreate([
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
      ]);
    }
  } catch (err) {
    console.log(err);
  }
};

const getRolUuidByName = async (name) => {
  return await Rols.findOne({
    where: { name: name },
  });
};

const createDefaultUsers = async (rol_uuid) => {
  const numberUsers = await Users.count();
  if (numberUsers === 0) {
    await Users.bulkCreate([
      {
        firstname: 'marlène',
        lastname: 'angouillant',
        isMember: true,
        rol_uuid: await getRolUuidByName('DANCERS').uuid,
      },
      //   {
      //     firstname: 'baptiste',
      //     lastname: 'hyver',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'hannah',
      //     lastname: 'moncot',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'kevin',
      //     lastname: 'boucherit',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'louis',
      //     lastname: 'escartin',
      //     isMember: true,
      //   },

      //   {
      //     firstname: 'stephane',
      //     lastname: 'vivier',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'nizar',
      //     lastname: 'slama',
      //     isMember: true,
      //   },

      //   {
      //     firstname: 'vanesa',
      //     lastname: 'salvador ibanez',
      //     isMember: true,
      //   },

      //   {
      //     firstname: 'jim',
      //     lastname: 'decocq',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'yann',
      //     lastname: 'bournouville',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'nicolas',
      //     lastname: 'gagnant',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'nathalie',
      //     lastname: 'balotte',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'guilhem',
      //     lastname: 'demont',
      //     isMember: true,
      //   },

      //   {
      //     firstname: 'stéphane',
      //     lastname: 'van pé',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'jonathan',
      //     lastname: 'diniz',
      //     isMember: true,
      //   },

      //   {
      //     firstname: 'jean-baptiste',
      //     lastname: 'gervais',
      //     isMember: true,
      //   },

      //   {
      //     firstname: 'laura',
      //     lastname: 'boléa',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'fabien',
      //     lastname: 'goyhex',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'guillaume',
      //     lastname: 'ribéroux',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'perrine',
      //     lastname: 'martyris',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'florian',
      //     lastname: 'gardy',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'cloé',
      //     lastname: 'truel',

      //     isMember: true,
      //   },
      //   {
      //     firstname: 'sylène',
      //     lastname: 'manusset',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'stéphane',
      //     lastname: 'barucq',
      //     isMember: true,
      //   },

      //   {
      //     firstname: 'stephane',
      //     lastname: 'jacot',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'enzo',
      //     lastname: 'duhalde',
      //     isMember: true,
      //   },
      //   {
      //     firstname: 'amine',
      //     lastname: 'ben taleb',
      //     isMember: true,
      //   },

      //   {
      //     firstname: 'sarah',
      //     lastname: 'elyafi',
      //     isMember: true,
      //   },
    ]);
  }
};

module.exports = { createDefaultUsers, getRolUuidByName, createDefaultRol };
