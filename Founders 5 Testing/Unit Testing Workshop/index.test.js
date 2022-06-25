// 1 -------------------------- Writing testable code --------------------------

  test("Creates a new poke URL", () => {
    const actual = makeUrl("pikachu");
    const expected = "https://pokeapi.co/api/v2/pikachu";
    equal(actual, expected);
  })

// 2 -------------------------- Deep equality --------------------------

  test("Creates an object out of string", () => {
    const actual = searchParamsToObject("name=oliver&email=hello@oliverjam.es");
    const expected = {
      name: "oliver",
      email: "hello@oliverjam.es"
    }
    equal(actual.name, expected.name);
    equal(actual.email, expected.email);
  })

// 3 -------------------------- Edge-cases --------------------------

  test("Error message if not a number", () => {
    const actual = isLeapYear("2020");
    const expected = "Invalid, please enter number";
    equal(actual, expected)
  })

  test("Error message if number < 0", () => {
    equal(isLeapYear(-2020), "Invalid, year cannot be negative");
  })

  test("Checks if year is a leap year", () => {
    equal(isLeapYear(2000), true, "2000 is a leap year % by 400")
    equal(isLeapYear(1500), false, "1500 is NOT a leap year % by 100")
    equal(isLeapYear(2020), true, "2020 is a leap year % by 4")
  })
