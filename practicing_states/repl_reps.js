let user_input

function read() {
  process.stdin.on('data', (a) => {
      let user_input = a.toString().trim()
      // console.log(user_input)
      // test(user_input)
      evaluate(user_input)
  })
  // test(user_input)

}
read()

function evaluate(input) {
  shout = input.toUpperCase();

  console.log(shout)
}



//  function test(inp) {
//   console.log(inp + " test function")
// }
