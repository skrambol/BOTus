/* global describe, it */
import chai from 'chai';
import supertest from 'supertest';
import app from './../../server';

const should = chai.should();
const request = supertest(app);

describe('User', () => {
  it('should get all the users', (done) => {
    request.get('/api/user')
            .expect(200)
            .end((err, res) => {
              should.not.exist(err);
              should.exist(res);
              done();
            });
  });
});
