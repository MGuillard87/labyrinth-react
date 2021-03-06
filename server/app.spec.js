const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
    test('It should response the GET method', done => {
        return request(app)
            .get('/')
            .expect(200, (_, response) => {
                expect(response.text).toEqual(expect.stringContaining('Welcome to Labyrinth'));
                done();
            });
    });
});
