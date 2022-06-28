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

// Calculate Function

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

test("calculate() should return added number passed in strings", () => {
    const actual = calculate("2", "+", "2");
    const expected = 4;
    equal(actual, expected)
})

// Testing UI logic 

test("Recieves the user's input and updates the page", () => {
    const inputA = document.querySelector("#a")
    const sign = document.querySelector('#sign')
    const inputB = document.querySelector("#b")
    inputA.value = 5;4
    sign.value = "*"
    inputB.value = 5;

    const submitButton = document.querySelector("button[type='submit']");
    submitButton.click();

    const result = document.querySelector("#result");

    equal(result.textContent, "25");
    result.textContent = "";
})