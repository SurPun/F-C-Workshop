// function map(array) {
//   return array;
// }

// 1 Map()

function map(array, fn) {
  const result = [];
  for (const item of array) {
    const transformed = fn(item);
    result.push(transformed);
  }
  return result;
}

//  2. Filter()

function filter(array, fn) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
  const item = array[i];
  const filter = fn(item, i);
  if (filter) result.push(item);
  }  
  return result;
}

// 3. Every()

function every(array, fn) {
  let result = true;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    result = fn(item, i);
    if(!result) break
    }
  return result;
}

// 4. some()

function some(array, fn) {
  let result = true;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    result = fn(item, i);
    if (result) break
  }
  return result;
}

// 4. find()

function find(array, fn) {
  for(let i = 0; i < array.length; i++) {
    const item = array[i];
    const found = fn(item, i)
    if (found) {
      return item;
    }
  }
  return undefined;
} 

// 5. reduce()

// function reduce(array, fn, accumulator) {
//   for (let i = 0; i < array.length; i++) {
//     const item = array[i];
//     accumulator = fn(accumulator, item, i);
//   }
//   return accumulator;
// }

// Reduce is actually a little more complicated:
// you can optionally not pass an initial accumulator value
// in this case it will use the first array value as the start
// and skip the first iteration
// e.g. [1, 2, 3].reduce((total, x) => total + x)
// the total starts at 1 and the loop starts at the second index
function reduce(array, fn, initialAccumulator) {
  let accumulator = initialAccumulator;
  let i = 0;
  if (initialAccumulator == undefined) {
    accumulator = array[0]; // default to first value
    i = 1; // skip first loop
  }
  for (; i < array.length; i++) {
    const el = array[i];
    accumulator = fn(accumulator, el, i);
  }
  return accumulator;
}

// 6. flat()

// function flat(array) {
//   let flattened = [];
//   for (let i = 0; i < array.length; i++) {
//     const el = array[i];
//     if (Array.isArray(el)) {
//       flattened = flattened.concat(el); // concat merges two arrays
//     } else {
//       flattened.push(el);
//     }
//   }
//   return flattened;
// }

function flat(array, depth = 1) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    // we need to deal with nested arrays (if we haven't hit our depth limit)
    if (Array.isArray(el) && depth > 0) {
      flattened = flattened.concat(flat(el), depth - 1); // recursively call flat again, and lower depth by 1 each time
    } else {
      flattened.push(el);
    }
  }
  return flattened;
}
