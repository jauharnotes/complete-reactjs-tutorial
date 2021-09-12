// fetch("https://api.randomuser.me/?nat=US&results=1")
//   .then((rest) => rest.json())
//   .then((json) => json.results)
//   .then(console.log)
//   .catch(console.error);

// const getFakeperson = async () => {
//   let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
//   let { result } = res.json();
//   console.log(result);
// };

// getFakeperson();

// const getFakeperson = async function (count) {
//   try {
//     let res = await fetch(`https://api.randomuser.me/?nat=US&results=${count}`);
//     let { result } = res.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getFakeperson(5);

// Promises
const getPeople = (count) =>
  new Promise((resolves, reject) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () =>
      request.status === 200
        ? resolves(JSON.parse(request.response).results)
        : reject(Error(request.statusText));
    request.onerror = (err) => reject(err);
    request.send();
  });

getPeople(15)
  .then((members) => console.log(members))
  .catch((error) => console.error(`getPeople failed: ${error.message}`));

// async function getData(count) {
//   try {
//     await fetch(`https://api.randomuser.me/?nat=US&results=${count}`)
//       .then((rest) => rest.json())
//       .then((data) => console.log(data));
//   } catch (error) {
//     console.error(`getData failed: ${error.message}`);
//   }
// }

// getData(10);
