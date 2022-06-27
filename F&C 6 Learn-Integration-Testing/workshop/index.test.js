// 1. Testing application logic 

test("add() should add numbers", () => {
    const actual = add(2, 2);
    const expected = 4;
    equal(actual, expected)
})

test("subtract() should subtract numbers", () => {
    const actual = subtract(20, 5);
    const expected = 15;
    equal(actual, expected);
})

test("multiply() should multiply numbers", () => {
    const actual = multiply(20, 5);
    const expected = 100;
    equal(actual, expected);
})

test("divide() should divide numbers", () => {
    const actual = divide(20, 5);
    const expected = 4;
    equal(actual, expected);
})

// Calculate

test("calculate() should return added number", () => {
    const actual = calculate(2,"+",2);
    const expected = 4;
    equal(actual, expected)
}) 

test("calculate() should return subtracted number", () => {
    const actual = calculate(20,"-",5);
    const expected = 15;
    equal(actual, expected)
}) 

test("calculate() should return multiplied number", () => {
    const actual = calculate(20,"*",5);
    const expected = 100;
    equal(actual, expected)
}) 

test("calculate() should return divided number", () => {
    const actual = calculate(20,"/",5);
    const expected = 4;
    equal(actual, expected)
}) 

test("calculate() should return default error", () => {
    const actual = calculate("2", "x", "2");
    const expected = "Please enter a valid sign (+, -, *, /)";
    equal(actual, expected)
})

test("calculate() should return added number passed in string", () => {
    const actual = calculate("2", "+", "2");
    const expected = 4;
    equal(actual, expected)
})

// Testing UI logic 