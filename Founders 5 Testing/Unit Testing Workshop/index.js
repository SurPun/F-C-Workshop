// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

  function makeUrl(name) {
    return "https://pokeapi.co/api/v2/" + name;
  }

// 2 -------------------------- Deep equality --------------------------

  // The Easy Way:

  // function searchParamsToObject (str) {
  //   const params = new URLSearchParams(str);
  //   return Object.fromEntries(params);
  // }

  // The Hard Way:

  function searchParamsToObject (str) {
    const arr = str.split("&");
    // console.log(arr);

    const obj = {};
    for (const entry of arr) {
      const newArr = entry.split("=")
      // console.log(newArr);

      const key = newArr[0];
      const value = newArr[1];
      obj[key] = value;
    }

    return obj;
  }

  // console.log(searchParamsToObject("name=oliver&email=hello@oliverjam.es"));

// 3 -------------------------- Edge-cases --------------------------

  function isLeapYear (year) {

    if (typeof year !== "number") return "Invalid, please enter number";
    if (year < 0) return "Invalid, year cannot be negative";
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;

    return false;
  }