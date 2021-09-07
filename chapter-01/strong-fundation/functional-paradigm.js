// function declaration
function logCompLiment() {
  console.log("You're doing great!");
}

logCompLiment();

// function expression
const logCompLiment2 = function () {
  console.log("You're doing great!");
};

logCompLiment2();

// invoking the function it's declared
hey();
// function declaration
function hey() {
  console.log("hey");
}

// invoking the function it's declared
// hey2();
// // function expression
// const hey2 = function () {
//   console.log("hey"); // TypeError: hey2 is not function
// };

// Passing arguments
const logCompLiment3 = function (firsName) {
  console.log(`Your're doing great, ${firsName}`);
};

logCompLiment3("Jauhar");

const logCompLiment4 = function (firsName, message) {
  console.log(`${firsName}: ${message}`);
};

logCompLiment4("jauhar", "You're so cool");
// console.log(logCompLiment4("jauhar", "You're so cool"));

// default value
const defaultPerson = {
  name: {
    firsName: "jauhar",
    lastName: "Uddin",
  },
  activity: "reading book",
};

function logaTivity(person = defaultPerson) {
  console.log(
    `hello nama saya ${person.name.firsName} ${person.name.lastName}, saya hobi ${person.activity}`
  );
}

logaTivity();

// arrow function
const lordify = (firsName, lord) => `${firsName} of ${lord}`;
console.log(lordify("jauhar", "depok"));

// arrow function with multiple line
const kota = (firsName, loard) => {
  if (!firsName) {
    throw new Error("A firsname requared to kota");
  } else if (!loard) {
    throw new Error("A loard requared to kota");
  } else {
    return `${firsName} of ${loard}`;
  }
};

console.log(kota("jauhar", "depok"));
// console.log(kota("jauhar")); // Error

// function returing object
const foo = (firsName, lastName) => ({
  firs: firsName,
  last: lastName,
});

console.log(foo("jauhar", "uddin"));

// babel
const add = (x = 5, y = 8) => console.log(x + y);

add();

let add2 = function add() {
  let x =
    arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];
  let y =
    arguments.length <= 1 || arguments[1] === undefined ? 8 : arguments[1];
  return console.log(x + y);
};

add2();
