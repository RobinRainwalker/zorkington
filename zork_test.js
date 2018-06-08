let cozy_home_rooms = {
  "mudroom": {
		can_move_to: ["living room"],
		contains: ["carhardt jacket"],
		objects: {
			name: ["jacket", "coat"]
			}
		},
  "living room": {
		can_move_to: ["mudroom", "kitchen"], 
		contains: ["old ratty af sofa ", "1990's era TV"],
		objects: {
			name: ["sofa", "couch"],
			description: "old ratty sofa",
			what_you_can_do: "you can [sit] on the couch",
			user_action_display: "you sit on the couch. it's surprisingly comfy",
			actions: "sit",
			color: "blue"
			}
		
		},
  "kitchen": {
		can_move_to: ["living room"]
		}
}

let test
let current_room = "living room"
let user_input

introduction()
interact()


function introduction() {
  console.log("welcome to mini-zork, you can move from one room to the next by entering the room you want to move to")
  console.log("you are currently standing in " + current_room)
  console.log("you can move into the " + cozy_home_rooms[current_room].can_move_to)
}

function select_room() {
  process.stdin.on('data', (a) => {
    user_input = a.toString().trim();
    change_room(user_input)
    where_am_i()
	interact(user_input)
  })
}

function interact(inp) {
	if (cozy_home_rooms[current_room].objects == undefined)  {
		return 
		} else if (inp == cozy_home_rooms[current_room].objects.actions) {
			console.log(cozy_home_rooms[current_room].objects.user_action_display)
		}
}


function room_contains() {
	if (cozy_home_rooms[current_room].contains == undefined) {
		return
	} else {
}
	console.log("as you enter this room, you notice " + cozy_home_rooms[current_room].contains)
	
}

function where_am_i() {
  console.log("you are currently standing in " + current_room)
  console.log("you can move into the " + cozy_home_rooms[current_room].can_move_to)
  console.log(cozy_home_rooms[current_room].objects.what_you_can_do)
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
