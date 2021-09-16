let colorLawn = {
  title: "lawn",
  color: "#00ff00",
  rating: 0,
};

// function rateColor(color, rating) {
//   color.rating = rating;
//   return color;
// }

// console.log(rateColor(colorLawn, 5).rating);
// console.log(rateColor(colorLawn.rating));

// const rateColor2 = function (color, rating) {
//   return Object.assign({}, color, { rating: rating });
// };

const rateColor2 = (color, rating) => ({
  ...color,
  rating,
});

console.log(rateColor2(colorLawn, 10).rating);
console.log(rateColor2(colorLawn));
