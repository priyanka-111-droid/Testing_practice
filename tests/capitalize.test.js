const capitalize = require('../scripts/capitalize');

test('dog becomes Dog',()=>{
    expect(capitalize('dog')).toMatch(/Dog/);
});
test('DOG remains DOG',()=>{
    expect(capitalize('DOG')).toMatch(/DOG/);
});
test('Dog remains Dog',()=>{
    expect(capitalize('Dog')).toMatch(/Dog/);
});
test('123 remains 123',()=>{
    expect(capitalize('123')).toMatch(/123/);
});
test('\'\' becomes \'\'',()=>{
    expect(capitalize('')).toMatch(/This is an empty string/);
});
test('Only strings allowed',()=>{
    expect(()=>capitalize(123)).toThrow(Error);
})
