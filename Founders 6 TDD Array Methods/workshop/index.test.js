// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

// test("map() should transform each element of the array using the fn argument", () => {
//   const result = map([1], (x) => x + 1);
//   equal(result[0], 2);
// });

// 1. Map()

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1, 2, 3], (x) => x + 1);
  equal(result[0], 2);
  equal(result[1], 3);
  equal(result[2], 4);

});

// 2. Filter()

test("filter() should return an array with the same element if they all pass the test", () => {
  const result = filter([1], () => true);
  equal(result[0], 1) 
})

test("filter() should remove element from the array that don't pass the fn test", () => {
  const result = filter([1, 2, 3], (x) => x > 1);
  equal(result[0], 2)
  equal(result[1], 3)
})

// 3. Every()

test("every() should only return true if all elements passes the fn test", () => {
  const result = every([1, 2, 3], (x) => x > 0);
  equal(result, true);
})

test("every() should return false if any element fails the fn test", () => {
  const result = every([1, 2, 3], (x) => x < 0);
  equal(result, false);
})

// 4. some()

test("some() should return true if any element passes the fn test", () => {
  const result = some([1, 2, 3], (x) => x > 2);
  equal(result, true);
})

test("some() should return false if all elements fail the fn test", () => {
  const result = some([1, 2, 3], (x) => x < 0);
  equal(result, false);
})

// 4. find()

test("find() should return the first element that passes the fn test", () => {
  const result = find([1, 2, 3], (x) => x > 1);
  equal(result, 2);
})

test("find() should return undefined if all elements fail the fn test", () => {
  const result = find([1, 2, 3], (x) => x < 0);
  equal(result, undefined)
})

// 5. reduce()

test("reduce() should call the fn for each element and use the return value as the new accumulator", () => {
  const result = reduce([1, 2, 3], (total, x) => total + x, 0);
  equal(result, 6);
});

test("reduce() should use the first element of array if no accumulator is provided", () => {
  const result = reduce([1, 2, 3], (total, x) => total + x);
  equal(result, 6);
});

// 6. flat()

test("flat() should turn a nested array into a single-level array", () => {
  const result = flat([1, [2, 3]]);
  equal(result[0], 1);
  equal(result[1], 2);
  equal(result[2], 3);
});

test("flat() should flatten nested arrays 2 levels deep", () => {
  const result = flat([1, [2, [3]]], 2);
  equal(result[0], 1);
  equal(result[1], 2);
  equal(result[2], 3);
});
