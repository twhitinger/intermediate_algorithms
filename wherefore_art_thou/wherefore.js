function whatIsInAName(collection, source) {
  // What's in a name?
  const keys = Object.keys(source);

  return collection.filter( obj => {
    return keys.reduce( (res , key)  => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    }, false);
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
