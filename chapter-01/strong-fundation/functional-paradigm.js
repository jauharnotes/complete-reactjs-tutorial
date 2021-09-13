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

const log = (message) => {
  console.log(message);
};

const obj = {
  message: "They can be added to object like variable",
  log(message) {
    console.log(message);
  },
};

obj.log(obj.message);

// arrays in JavaScript:
const message = [
  "They can be inserted into arrays",
  (message) => console.log(message),
  "Like variable",
  (message) => console.log(message),
];

message[1](message[0]);
message[3](message[2]);

// Functions can be sent to other functions as arguments, just like other variables:
const insideFn = (logger) => {
  logger("They can be sent to other function as argument");
};

insideFn((message) => console.log(message));

// They can also be returned from other functions, just like variables:
const createScream = function (logger) {
  return function (message) {
    logger(message.toUpperCase() + "!!!");
  };
};

const scream = createScream((message) => console.log(message));

scream("Functions can be returned from other function");
scream("createScream return a function");
scream("scream invokes that returned function");
