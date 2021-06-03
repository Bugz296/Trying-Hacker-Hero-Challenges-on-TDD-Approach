const chai         = require('chai');
const expect       = chai.expect;
const challenges    = require('../challenges');
describe("Adding Two Numbers", function() {
    it('Should return sum of two integers', async function(){
        let a = 5;
        let b = 6;
        
        let challenge = challenges.sum;
        /* Check and expected data.status is equal to true */
        expect(challenge(a, b)).to.equal(11);
    });
});

describe("Countdown by 8", function() {
    it('Counts down from n by 8 and stops if it is less than 0', async function(){
        let n = 32;
        
        let challenge = challenges.countDownByEight;
        /* Check and expected data.status is equal to true */
        expect(challenge(n)).to.equal("32 24 16 8 0 ");
    });
});