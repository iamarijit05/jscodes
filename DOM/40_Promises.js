const promiseOne = new Promise(function (resolve, reject) {
  //do an async task
  //db calls, cryptographic,network

  setTimeout(function () {
    console.log("Async Task is Completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Arijit", email: "arijit@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; //set here
    if (!error) {
      resolve({ username: "Arijit Das", password: "123" });
    } else {
      reject("ERROR: Something Went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is finally resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; //set here
    if (!error) {
      resolve({ username: "Javascript", password: "123" });
    } else {
      reject("ERROR: JS Went Wrong");
    }
  }, 1000);
});


//async await

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

consumePromiseFive()



/* async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch {
        console.log("E: ",error);
    }
} */



//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));
