// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.
function intro(){
    console.log("Hello, my name is Susan.I am a software engineer");
    }
 setTimeout(intro,5000);  




// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID.
//  Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
async function fetchAndLogUserDataSequentially(userIds) {     
      const userData = await getUserData(userId);
      console.log(userData);
    
  }  
// You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message if the task is successful,
//  and a custom error message if there's an error.

function performTask() {
    return new Promise((resolve, reject) => { 
      const done = true;    
      const result =("Task successful!"); 
      const error = ("Task failed!!")     
      if (done) {       
        resolve(result);
      } else {        
        reject(error);
      }
    });
  }
  
function runTask() {
    performTask()
      .then(() => console.log("Congratulations on finishing your first Project"))
      .catch(() => console.log("Put more effort on your project!!"));
  }

runTask();
  

