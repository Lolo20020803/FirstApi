/* eslint-disable no-underscore-dangle */
const request = require('supertest');
const app = require('../server');

const superUser = {
  email: 'admin@test.test',
  password: '1234',
};

let user = {};
let userID = '';

beforeEach(async () => {
  const uniqueNumber = Math.trunc(Math.random() * 100);
  user = {
    email: `beforeEach(${uniqueNumber})@test.test`,
    password: `${uniqueNumber}`,
    name: `test${uniqueNumber}Name`,
    surname: `test${uniqueNumber}Surname`,
  };

  await request(app)
    .post('/postUser')
    .send(user)
    .then((response) => {
      userID = response.body._id;
    });
});

afterEach(async () => {
  await request(app)
    .delete(`/deletedUser/${userID}`);
});

describe('getAllUsers()', () => {
  describe('get all users', () => {
    it('should return all users', async () => {
      await request(app)
        .get('/user')
        .expect(200);
    });
  });
});

describe('getUsersByID()', () => {
  describe('get one user', () => {
    it('should return the user', async () => {
      await request(app)
        .get(`/getUserId/${userID}`)
        .expect(200);
    });
  });
  describe('get one invalid user', () => {
    it('should return the error', async () => {
      await request(app)
        .get('/getUserId/thisIdDontExist')
        .expect(404);
    });
  });
});

describe('getUserByEmail()', () => {
  describe('get one user', () => {
    it('should return the user', async () => {
      await request(app)
        .get(`/getUserEmail/${superUser.email}`)
        .expect(200);
    });
  });

  describe('get one invalid email', () => {
    it('should return the error', async () => {
      await request(app)
        .get('/getUserId/thisEmailDontExist')
        .expect(404);
    });
  });
});

describe('deletedUser()', () => {
  describe('deleted the user', () => {
    it('should return the user', async () => {
      await request(app)
        .delete(`/deletedUser/${userID}`)
        .expect(200);
    });
  });

  describe('deleted the user', () => {
    it('should return the user', async () => {
      await request(app)
        .delete('/deletedUser/thisIdDontExist')
        .expect(404);
    });
  });
});
