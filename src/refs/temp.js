// Simulating an asynchronous function with a callback
function fetchUserDataCallback(userId, callback) {
    setTimeout(() => {
      const userData = {
        id: userId,
        username: "john_doe",
        email: "john@example.com",
      };
      callback(userData);
    }, 1000);
  }
  
  // Using the function with a callback
  fetchUserDataCallback(123, (userData) => {
    console.log("Callback Result:", userData);
  });
  
// Simulating an asynchronous function with a promise
// function fetchUserDataPromise(userId) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const userData = {
//           id: userId,
//           username: "john_doe",
//           email: "john@example.com",
//         };
//         resolve(userData);
//       }, 1000);
//     });
//   }
  
//   // Using the function with promises
//   fetchUserDataPromise(123)
//     .then((userData) => {
//       console.log("Promise Result:", userData);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
console.log("ravindar");  
  
  