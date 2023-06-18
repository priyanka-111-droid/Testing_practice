const reverse = require('../scripts/reverse');

test('hello becomes olleh',()=>{
    expect(reverse('hello')).toBe('olleh');
});
test('\'\' becomes \'\'',()=>{
    expect(reverse('')).toBe('');
});