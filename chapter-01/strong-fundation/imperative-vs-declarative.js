let string = "Restaurants in Hanalei";
let urlFriendly = "";

for (var i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    urlFriendly += "_";
  } else {
    urlFriendly += string[i];
  }
}

console.log(urlFriendly);

// Now let’s look at a declarative approach to the same problem:
const string2 = "Restaurants in Hanalei";
let urlFriendly2 = string.replace(/ /g, "_");

console.log(urlFriendly2);
