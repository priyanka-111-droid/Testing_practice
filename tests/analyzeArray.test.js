const analyzeArray = require('../scripts/analyzeArray');


test('are all operations okay?',()=>{
    const analyzedObject = analyzeArray([1,2,3,4,5]);
    expect(analyzedObject).toEqual({ average: 3, max: 5, min: 1, length: 5 });
})
test('Empty array handling',()=>{
    expect(()=>analyzeArray([])).toThrow(Error);
});
test('single element',()=>{
    const analyzedObject = analyzeArray([7]);
    expect(analyzedObject).toEqual({ average: 7, max: 7, min: 7, length: 1 });
})