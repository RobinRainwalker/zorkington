let cozy_home_rooms = {
  "mudroom": {can_move_to: ["living room"]},
  "living room": {can_move_to: ["mudroom", "kitchen"]},
  "kitchen": {can_move_to: ["living room"]}
}

let current_room = "mudroom"
let user_input

function introduction() {
  console.log("welcome to mini-zork, you can move from one room to the next by entering the room you want to move to")
  console.log("you are currently standing in " + current_room)
  console.log("you can move into the " + cozy_home_rooms[current_room].can_move_to)
}
introduction()

function select_room() {
  process.stdin.on('data', (a) => {
    user_input = a.toString().trim();
    // check_valid_transition(user_input)
    change_room(user_input)
    where_am_i()

  })
}

function where_am_i() {
  console.log("you are currently standing in " + current_room)
  console.log("you can move into the " + cozy_home_rooms[current_room].can_move_to)
}


function change_room(new_room) {
  valid_moves = cozy_home_rooms[current_room].can_move_to
  if (valid_moves.includes(new_room)) {
    current_room = new_room
  } else {
    "uh oh, moving from " + current_room + " to " + new_room + " didn't work"
  }
}

select_room()

// function check_valid_transition(attempted_room_transition) {
//   console.log("user input from DURING check valid transition " + user_input)
//   if (attempted_room_transition === "living room") {
//     console.log("attempting to move from " + current_room + " to " + cozy_home_rooms[current_room].can_move_to);
//   } else if (attempted_room_transition === "mudroom") {
//     console.log("attempting to move from " + current_room + " to " + cozy_home_rooms[current_room].can_move_to);
//   } else {
//     console.log("nah bae")
//   }
// }





// function check_variables() {
// console.log(user_input + " from check_variables function")
// }

// setTimeout( check_variables, 1000)
