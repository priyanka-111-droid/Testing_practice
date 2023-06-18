const calculator = require('../scripts/calculator');

test('4+2 is 6',()=>{
    expect(calculator.add(4,2)).toBe(6);
});
test('4-2 is 2',()=>{
    expect(calculator.subtract(4,2)).toBe(2);
});
test('4*2 is 8',()=>{
    expect(calculator.multiply(4,2)).toBe(8);
});
test('4/2 is 2',()=>{
    expect(calculator.divide(4,2)).toBe(2);
});
test('4/0 is error',()=>{
    expect(()=>calculator.divide(4,0)).toThrow(Error);
});
test("Divide", () => {
    expect(calculator.divide(15, 5)).toBeCloseTo(3);
  });