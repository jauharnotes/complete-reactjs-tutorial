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
