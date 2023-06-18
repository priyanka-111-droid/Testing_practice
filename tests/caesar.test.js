const caesar = require("../scripts/caesar");

test('shift by 1',()=>{
    expect(caesar("defend",1)).toMatch(/efgfoe/);
});
test('wrap from z to a',()=>{
    expect(caesar("uvwxyz",2)).toMatch(/wxyzab/);
});
test('leave punctuation alone',()=>{
    expect(caesar("..abcd,@e,",2)).toMatch(/..cdef,@g/);
});
test('both lower and upper case',()=>{
    expect(caesar("UVWXYzA",1)).toMatch(/VWXYZaB/);
});
test('check for sentence',()=>{
    expect(caesar("defend the east wall of the castle",1)).toMatch(/efgfoe uif fbtu xbmm pg uif dbtumf/);
});