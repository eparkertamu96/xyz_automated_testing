import { NightwatchBrowser, NightwatchTests } from "nightwatch";
import '@nightwatch/apitesting';

const xyzTests: NightwatchTests = {
    
    'can GET message': async ({ supertest }: NightwatchBrowser) => {
      await supertest
        // Request can take a a baseUrl for a remote API or the entry point of a REST API, like Express()
        .request(`http://${process.env.TEST_URL}`)
        // After request, the syntax exactly matches supertest and chai
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .then((response) => {
          expect(response.body.message).to.be.equal("Automate all the things!");
        });
    },
  };
  
export default xyzTests;