
// CONST AND ASYNC FUNCTIONS
const url = 'https://jsonplaceholder.typicode.com/users';

async function getUsers() {
  let usersResponse = await fetch(url);
  let userJson = await usersResponse.json();
  return userJson;
}

async function sendRequest(url, params)
{
  let response = await fetch(url, params);
  if(!response.ok) return new Error(response.statusText);
  return response.json();
}

async function addUser(user)
{
  let params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };

  return await sendRequest(url, params);
}

async function updateUser(user)
{
  let params = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };

  let putUrl = url + `/${user.id}`;
  return await sendRequest(putUrl, params);
}

async function deleteUser(user)
{
  let params = {
    method: 'DELETE'
  };

  let putUrl = url + `/${user.id}`;
  return await sendRequest(putUrl, params);
}

async function updateUserName(user, newName)
{
  let params = {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name: newName })
  };

  let putUrl = url + `/${user.id}`;
  return await sendRequest(putUrl, params);
}

// MAIN CODE
let usersPromise = getUsers();
usersPromise.then(users => {
  console.log("result:\n" + JSON.stringify(users[0], null, 4));
});

let user = {
  "id": 10,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton",
  "email": "Rey.Padberg@karina.biz",
  "address": {
    "street": "Kattie Turnpike",
    "suite": "Suite 198",
    "city": "Lebsackbury",
    "zipcode": "31428-2261",
    "geo": {
      "lat": "-38.2386",
      "lng": "57.2232"
    }
  },
  "phone": "024-648-3804",
  "website": "ambrose.net",
  "company": {
    "name": "Hoeger LLC",
    "catchPhrase": "Centralized empowering task-force",
    "bs": "target end-to-end models"
  }
};

addUser(user).then(res =>
{
  console.log("result:\n" + JSON.stringify(res, null, 4));
  user = res;
});

user["name"] = "Clementina Franko";
updateUser(user).then(res => {
  console.log("result:\n" + JSON.stringify(res, null, 4));
});

deleteUser(user).then(res => {
  console.log("result:\n" + JSON.stringify(res, null, 4));
});

updateUserName(user, "Franko").then(res => {
  console.log("result:\n" + JSON.stringify(res, null, 4));
});


// let xhr = new XMLHttpRequest();
//
// xhr.open("GET", url, false);
//
// xhr.onreadystatechange = (event) => {
//   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//     console.log(event);
//     console.log(event.target.responseText);
//   }
// };
//
// xhr.send();
