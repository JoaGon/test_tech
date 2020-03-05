const { expect } = require('chai');
const { validate } = require('joi');
const { apiSchema } = require('../../backend/request-schema/api.schema');


describe('Api Schema', function () {

    let mockData;

    this.beforeEach(function () {
        setMockAccount();
    });


    context('Time', function () {

        it('should return null error when value is correct', function (done) {
            const error = validate(mockData, apiSchema).error;
            expect(error).to.be.null;
            done();
        });

        it('should return message ("time" is required) when value is not present', function (done) {
            delete mockData.time;
            const message = validate(mockData, apiSchema).error.details[0].message;
            expect(message).to.be.equal('"time" is required');
            done();
        });
    });

    context('Timezone', function () {

        it('should return null error when value is correct', function (done) {
            const error = validate(mockData, apiSchema).error;
            expect(error).to.be.null;
            done();
        });

        it('should return message ("timezone" is required) when value is not present', function (done) {
            delete mockData.timezone;
            const message = validate(mockData, apiSchema).error.details[0].message;
            expect(message).to.be.equal('"timezone" is required');
            done();
        });
    });




    const setMockAccount = () => {

        mockData = {
            time: '18:30:00',
            timezone: '-3',
        };
    };
});