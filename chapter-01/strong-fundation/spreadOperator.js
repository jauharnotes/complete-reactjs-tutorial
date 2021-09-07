// combine the two array into one
const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const combine = [...peaks, ...canyons];

console.log(combine);
console.log(combine.join(", "));

//We could use the Array.reverse method to reverse the array in combination with array destructuring
const names = ["Tallac", "Ralston", "Rose"];
const [last] = names.reverse();
console.log(last);
console.log(names.join(", "));

// with spread operator
const names2 = ["Tallac", "Ralston", "Rose"];
const [last2] = [...names2.reverse()];
console.log(last2);
console.log(names2.join(", "));

//The spread operator can also be used to get the remaining items in the array
const names3 = ["Johar", "Juned", "Agung", "Subakir"];
const [last3, ...others] = names3;
console.log(last3);
console.log(others.join(", "));

console.log("==============================");

// spread operator in function argument
function directions(...args) {
  let [start, ...remaining] = args;
  let [finish, ...stops] = remaining.reverse();

  console.log(`drive through ${args.length} towns`);
  console.log(`start in ${start}`);
  console.log(`the destination is ${finish}`);
  console.log(`stopping ${stops.length} times in betweem`);
}

directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");

//  combined two arrays into a third array
const morning = {
  breakFast: "Nasi Uduk",
  lunch: "Nasi Padang",
};

const dinner = "Mendoan & Bajigur";

const backpackingMeals = {
  ...morning,
  dinner,
};

console.log(backpackingMeals);
