const arr = ["Alexa Grace", "Lexi Lore", "Lena Paul"];

arr.push("Angelina Heaven");
const arr2 = [...arr, "Melody Mark"];

console.log(arr, arr2);

// function currying

const add = (a) => {
  return (b) => {
    return (c) => {
      return a * (b + c);
    };
  };
};

console.log(add(1)(1)(1));

const level = add(5);
console.log(level(2)(2));
