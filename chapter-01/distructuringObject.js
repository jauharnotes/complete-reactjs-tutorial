import { func } from "prop-types";

const sandwich = {
  bread: "lontong sayur",
  meat: "mendoan",
  cheese: "ponorogo",
  toppings: ["lettuce", "tomato", "mustard"],
};

// const { bread, meat } = sandwich;
// console.log(bread, meat);

let { bread, meat } = sandwich;

bread = "nasi uduk";
meat = "gorengan";
console.log(bread, meat);

// distructuring function arguments
const lordify = (regularPerson) => {
  console.log(`${regularPerson.firsName} of Caterbury`);
};

const regularPerson = {
  firsName: "Jauhar",
  lastName: "Uddin",
};

lordify(regularPerson);

// Instead of using dot notation syntax to dig into object, we can desctructure the values we need out of regularPerson
const lordify2 = ({ lastName }) => {
  console.log(`${lastName} of Caterbury`);
};

const regularPerson2 = {
  firsName: "johar",
  lastName: "Uddin",
};

lordify2(regularPerson2);

const regularPerson3 = {
  firsName: "johar",
  lastName: "uddin",
  spouse: {
    firsName: "Donie",
    lastName: "Khannady",
  },
};

const lordify3 = ({ spouse: { firsName } }) => {
  console.log(`${firsName} of Catebury`);
};

lordify3(regularPerson3);

// object literal enhancement
const name = "Johar";
const elevation = 1993;

const funHike = { name, elevation };
console.log(funHike);

// create methods with object enhancement or restructuring
// const book = "Tipping Point";
// const author = "Malcolm Gladwell";
// const print = function () {
//   console.log(`I bought a book ${this.book} by ${this.author}`);
// };

// const foo = { book, author, print };
// foo.print();

// When defining object methods, it’s no longer necessary to use the function keyword:
// old
var skier = {
  name: name,
  sound: sound,
  powerYell: function () {
    var yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed: function (mph) {
    this.speed = mph;
    console.log("speed:", mph);
  },
};

// new
const skier2 = {
  name,
  sound,
  powerYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed(mph) {
    this.speed = mph;
    console.log("speed:", mph);
  },
};
