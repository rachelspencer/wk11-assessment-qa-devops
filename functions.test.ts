const {shuffleArray} = require('./utils')

describe.only('shuffleArray should', () => {
    
    const sampleArr = ['1', '2', '3', '4', '5'];
   
    it('returns an array', () => {
        const result = shuffleArray(sampleArr) 
        expect(Array.isArray(result)).toBe(true);
    })

    it('array of the same length as the argument sent in', () => {
        const result = shuffleArray(sampleArr)
        expect(result.length).toEqual(sampleArr.length);
    })

    it('have all the same items that are in the original array', () => {
        const result = shuffleArray(sampleArr)
        expect(result).toEqual(expect.arrayContaining(sampleArr));
    })
});