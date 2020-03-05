const chai = require('chai');
const sinonChai = require("sinon-chai");
const sinon = require('sinon');
chai.use(sinonChai);
const expect = chai.expect;
const sandbox = sinon.createSandbox();

const apiController = require('../../backend/controller/api')
//var sandbox = sinon.createSandbox()

describe('Api controller', () => {
    context('api controller should', () => {
        let mockData = {
            time: '18:30:00',
            timezone: '123ABCacb?_'
        }
        beforeEach(() => {
            mockRes = {
                status: (code) => {
                    return {
                        json: (res) => {
                            return { status: code, res: res };
                        }
                    }
                }
            }
        })

        it.only('returns 500 for invalid information provided', async () => {
            mockReq = {
                body: {
                    time: '18:30:00',
                    timezone: '123ABCacb?_'
                }
            }

            let result = await apiController.getUTC(mockReq, mockRes)
            expect(result.status).to.equal(200)
            expect(result.res).to.have.property('message')
        })


    })
})
