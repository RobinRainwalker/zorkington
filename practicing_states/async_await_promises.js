async function f() {

  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise;

  console.log(result);
}

f();

// let states = {
//   "green": {canChangeTo: ["yellow"]},
//   "yellow": {canChangeTo: ["red"]},
//   "red": {canChangeTo: ["green"]}
// }
//
// let currentState = "green";
//
// function enterState(newState) {
  // let validTransitions = state[currentState].canChangeTo;
//   if (validTransitions.includes(newState)) {
//     currentState = newState;
//   } else {
//     throw "Invalid state transition attempted - from " + currentState + " to " + newState;
//   }
// }
//
// function ask(question, callback) {
//   var stdin = process.stdin, stdout = process.stdout;
//
//   stdin.resume();
//   stdout.write(`${question}: `);
//
//   stdin.once('data', function(data) {
//     data = data.toString().trim();
//
//     if (!data || data === '') {
//       stdout.write('Please enter some data bro... \n');
//       ask(question, callback);
//     }
//     else {
//       callback(data);
//     }
//   })
// }
//
//
// ask('what is your name?', function(name) {
//   ask('what color are your eyes?', function(eyes) {
//     console.log(`your name is ${name}, and you have ${eyes} colored eyes`);
//     process.exit();
//   });
// });
