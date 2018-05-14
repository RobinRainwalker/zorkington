let cozy_home_rooms = {
  "mudroom": {can_move_to: ["living room"]},
  "living room": {can_move_to: ["mudroom"]}
}

let current_room = "mudroom"
let user_input

console.log("you are currently standing in " + current_room)
console.log("you can move into the " + cozy_home_rooms[current_room].can_move_to)

function select_room() {
  process.stdin.once('data', (a) => {
    user_input = a.toString().trim();
    console.log("user input " + user_input + " from select room function")
  })
  // check_valid_transition(user_input)
}



select_room()


function change_room(new_room) {
}

function check_valid_transition(attempted_room_transition) {
  if (attempted_room_transition === "living room") {
    console.log("attempting to move from " + current_room + " to " + cozy_home_rooms[current_room].can_move_to);
  } else if (attempted_room_transition === "mudroom") {
    console.log("attempting to move from " + current_room + " to " + cozy_home_rooms[current_room].can_move_to);
  } else {
    console.log("nah bae")
  }
}


// function check_variables() {
// console.log(user_input + " from check_variables function")
// }

// setTimeout( check_variables, 1000)
