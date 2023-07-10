describe('XYZ Tests', function() {
    it('Test GET is active', async function({supertest}){
        await supertest
            .request(process.env.TEST_URL)
            .get('/')
            .expect(200)
    });

    it('Test message is Automate all the things!', async function({supertest}){
        await supertest
            .request(process.env.TEST_URL)
            .get('/')
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.body.message).to.be.equal("Automate all the things!");
            });
    });
});