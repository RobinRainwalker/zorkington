let item
let items
let action
let actions 
let valid_action
let inventory = {}
let current_room = "182 Main St"

let location = {
	"182 Main St": {
		description: function() {console.log("182 Main St.\nYou are standing on Main Street between Church and South Winooski\nThere is a door here. A keypad sits on the handle.\nOn the door is a handwritten sign.") },
		"items": {
			"sign": {
				usage: {
					"read": ["read", "inspect", "examine"]
					"used": false
					"use": function() {console.log()}
					},
				description: function() {console.log("The sign says 'Welcome to Burlington Code Academy! Come on up to the second floor. If the door is locked, use the code 12345'")}
				},
			"test": {
				usage:[0,1,2],
				description: function(){console.log("testedtesting")}
				},
			"testing": "TESTING"
			},
		can_move_to: ["Foyer"]
		}
		//~ ,
	//~ "Foyer": {
		//~ description: function(){},
		//~ items: {
			//~ keypad: {
				//~ usage: ["enter code", "enter password", "key in", "punch in", "enter"],
				//~ description: "",
				//~ keycode: 12345
				//~ }
			//~ },
		//~ can_move_to: ["182 Main St", "Foyer"]
		//~ }
	}
	
	


function start() {
	location[current_room].description()

	process.stdin.on('data', (chunk) => {
		user_input = chunk.toString().trim();
		parse_input(user_input)
	})
}

function parse_input(inp) {
	input = inp.toLowerCase();
	
	items = Object.keys(location[current_room]["items"]) 
	
	items.forEach(function(e) {
		if (input.includes(e)) {
			item = e
			}
		})
		
	if (item != undefined) {
		actions = location[current_room]["items"][item]["usage"]

		actions.forEach(function(e){
		if (input.includes(e)) {
			action = e
			}
		})
	}

	if (item === undefined) {
	console.log("\nSorry, I don't know how to do that")
	valid_action = false
	} else if (item != undefined && action === undefined) {
		console.log("\nSorry, I don't know how to use " + item + " that way")
		console.log("\nAvailable actions for " + item + " are \n" + location[current_room]["items"][item]["usage"])
		valid_action = false
	} else if (item != undefined && action != undefined){
		valid_action = true
	} else {
		console.log("\nSorry, I don't know how to do that")
		valid_action = false
	}
}

function clear_variables() {
	item = undefined
	action = undefined
	actions = undefined
	valid_action = undefined
}

start()
