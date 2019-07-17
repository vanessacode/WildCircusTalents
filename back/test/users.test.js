const chai = require('chai');
const chaiHttp = require('chai-http');
const { sequelize, User, Rol } = require('../models');
const app = require('../server');

// Configure chai
chai.use(chaiHttp);
chai.should();

beforeEach(() => {
  return sequelize.sync({ force: true });
});

describe('Users', () => {
  it('GET /users: Should return the list of users and 200', (done) => {
    // 0 : creer un user
    // 1 : faire GET /users
    // 2 : verifier la response
    const rol = {
      name: 'clown',
      description: 'Rol description',
    };
    let user;
    Rol.create(rol)
      .then((createdRol) => {
        user = {
          firstName: 'Vanessa',
          lastName: 'Salvador',
          phone: 695030609,
          email: 'jdashdjkhas@njkashdj.com',
          isMember: true,
          rol_uuid: createdRol.uuid,
        };
        return User.create(user);
      })
      .then(() => {
        chai
          .request(app)
          .get('/users')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body[0].should.deep.include(user);
            done();
          });
      });
  });

  it('POST /users: Should create a user is not member and 200', (done) => {
    // 0 : creer un user
    // 1 : faire POST /users
    // 2 : verifier la response
    const rol = {
      name: 'clown',
      description: 'Rol description',
    };
    let user;
    Rol.create(rol)
      .then((createdRol) => {
        user = {
          firstName: 'Vanessa',
          lastName: 'Salvador',
          phone: 695030609,
          email: 'jdashdjkhas@njkashdj.com',
          isMember: false,
          rol_uuid: createdRol.uuid,
        };
      })
      .then(() => {
        chai
          .request(app)
          .post('/users')
          .send(user)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.deep.include(user);
            res.body.isMember.should.be.equal(false);
            done();
          });
      });
  });
});
