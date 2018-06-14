let location = {
	"182 Main St": {
		description: function() {console.log("182 Main St.\nYou are standing on Main Street between Church and South Winooski\nThere is a door here. A keypad sits on the handle.\nOn the door is a handwritten sign.") },
		"items": {
			"sign": {
				usage: ["read", "inspect", "examine" ],
				description: function() {console.log("The sign says 'Welcome to Burlington Code Academy! Come on up to the second floor. If the door is locked, use the code 12345'")}
				},
			"test": "TEST",
			"testing": "TESTING"
			},
		can_move_to: ["Foyer"]
		},
	"Foyer": {
		description: function(){},
		items: {
			keypad: {
				usage: ["enter code", "enter password", "key in", "punch in", "enter"],
				description: "",
				keycode: 12345
				}
			},
		can_move_to: ["182 Main St", "Foyer"]
		}
	}
	
	
let current_room = "182 Main St"

//~ console.log(Object.keys(location[current_room]["items"]))

location[current_room].description()

function start() {
	process.stdin.on('data', (chunk) => {
		user_input = chunk.toString().trim();
		parse_input(user_input)
		
		
	})
}

let item
let action

function parse_input(inp) {
	
	
	
	input = inp.toLowerCase();
	
	items = Object.keys(location[current_room]["items"]) //this is an array

	items.forEach(function(e) {
		if (input.includes(e)) {
			item = e
			}
		})
	
	if (item !== undefined && input.includes(location[current_room]["items"][item])) {
		
	let actions = location[current_room]["items"][item]["usage"]
	
	actions.forEach(function(e) {
		if (input.includes(e)) {
			action = e
			} else { 
				action = false
			}
		})
		console.log(actions + "ACTIONS")
	}
	
	
	console.log(item + " item")
	console.log(action + " action")

	//~ else {
	//~ console.log("Sorry, I don't know how to " + input)
	//~ }
}

start()
