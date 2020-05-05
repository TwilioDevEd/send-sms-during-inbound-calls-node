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
          "From": "+593985647265",
          "To": "+12014648621"
        });
  
      expect(response.status).to.eql(200);
      expect(response.text).to.include('<Say>Thanks for calling! We just sent you a text with a clue.</Say>');
    });
  });
});
