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
