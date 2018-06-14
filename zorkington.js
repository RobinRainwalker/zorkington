let location = {
	"182 Main St": {
		description: function() {console.log("182 Main St.\nYou are standing on Main Street between Church and South Winooski\nThere is a door here. A keypad sits on the handle.\nOn the door is a handwritten sign.") },
		"items": {
			"sign": {
				usage: ["read", "inspect", "examine" ],
				description: function() {console.log("The sign says 'Welcome to Burlington Code Academy! Come on up to the second floor. If the door is locked, use the code 12345'")}
				},
			"test": "TESTES",
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

function start() {
	process.stdin.on('data', (chunk) => {
		user_input = chunk.toString().trim();
		parse_input(user_input)
		
		
	})
}

function parse_input(inp) {
	input = inp.toLowerCase();
	items = Object.keys(location[current_room]["items"]) //this is an array
	
	if (items.includes(input) === true) {
		console.log("i think u used " + items)
		}
	
	
	//~ if (input.includes(location[current_room].items))
	//~ if(input) {
	
	//~ } 
	else {
	console.log("Sorry, I don't know how to " + input)
	}
}

start()
