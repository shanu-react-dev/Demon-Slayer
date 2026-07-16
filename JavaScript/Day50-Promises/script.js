// let promiseone = new Promise(function (resolve, reject) {
//   console.log("hii this is promise one");
//   let isAvailable = false;
//   if (isAvailable === true) {
//     resolve("Yeah we got the data");
//   } else {
//     reject("Please try again later! Page not found");
//   }
// });
// console.log(promiseone);

// promiseone.then(function (data) {
//   console.log(data);
// });
// promiseone.catch(function (err) {
//   console.log(err);
// });

// promiseone.then((data) => console.log(data)).catch((err) => console.log(err));

// let data = fetch("https://api.github.com/users");
// console.log(data);

// let fetchedData = data.then((fetchedData) => {
//   console.log(fetchedData);
//   //   console.log(fetchedData.json());
//   return fetchedData.json();
// });

// console.log(fetchedData);

// fetchedData.then((finalData) => {
//   console.log(finalData);
// });

let users = document.querySelector(".users");

fetch("https://api.github.com/users")
  .then((fetcheddata) => {
    console.log(fetcheddata);
    return fetcheddata.json();
  })
  .then((finalData) => {
    console.log(finalData);
    let table = document.createElement("table");
    finalData.forEach((element) => {
      let row = document.createElement("tr");
      row.innerHTML = `
      <td>${element.login}</td>
      <td><img src=${element.avatar_url}/></td>
      `;

      table.append(row);
    });

    users.append(table);
  })
  .catch((err) => {
    console.log(err.message);
  });
