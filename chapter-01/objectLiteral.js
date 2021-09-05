// object literal enhancement
const name = "Johar";
const elevation = 1993;

const funHike = { name, elevation };
console.log(funHike);

const asmo = "jauhar";
const weton = 1993;
const print = function () {
  console.log(`Mt. ${this.asmo} is ${this.weton} feel tall`);
};

const foo = { asmo, weton, print };
foo.print();

// old
