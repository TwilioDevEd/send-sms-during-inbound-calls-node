const chai = require('chai');
const expect = chai.expect;
const app = require('../app');

chai.use(require('chai-http'));

describe('app.js', () => {
  describe('/answer', () => {
    it('responds with 200', async() => {
      let response = await chai.request(app)
        .post('/answer')
        .send({
          "From": "+5931231231231",
          "To": "+12345678900"
        });
  
      expect(response.status).to.eql(200);
      expect(response.text).to.include('<Say>Thanks for calling! We just sent you a text with a clue.</Say>');
    });
  });
});
