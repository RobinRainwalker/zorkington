let item
let items
let action
let actions
let specific_action
let valid_action
let inventory = {}
let current_room = "182 Main St"
let TEST

// NO functions inside the data structure. it's a lookup table. the functions outside the data structure interact with it.
// it should not interact with itself


//alternative data structure:
let actions = {
	"take": ["take", "grab", "steal", "pick up"]
}
reverseActions = {}
for (action in actions) {
	aliases = actions[action]
	for (alias in aliases) {
		reverseActions[alias] = action;
	}
}
action = reverseActions[action]

// IMPORTANT: string.split(' ')  WILL turn a longer string into an array where words are split between spaces and turned into an array
//"my dog has fleas".split(' ')
//[ 'my', 'dog', 'has', 'fleas' ]


let location = {
	"182 Main St": {
		description: function () { console.log("182 Main St.\nYou are standing on Main Street between Church and South Winooski\nThere is a door here. A keypad sits on the handle.\nOn the door is a handwritten sign.") },
		"items": {
			"sign": {
				usage: {
					actions: [
						{name: ["read", "inspect", "examine"],
						"take": ["take", "grab", "steal", "pick up"]
					],
					"used": false,
					"taken": false,
					"read_sign": () => { location[current_room]["items"][item]["usage"].description() },
					"take_sign": function () { console.log("How are other students going to find their way?") }
				},
				description: function () { console.log("The sign says 'Welcome to Burlington Code Academy! Come on up to the second floor. If the door is locked, use the code 12345'") }
			},
			"test": {
				usage: [0, 1, 2],
				description: function () { console.log("testedtesting") }
			},
			"testing": "TESTING"
		},
		can_move_to: ["Foyer"]
	}
}

function getKeyByValue(object, value) {
	TEST = Object.keys(object).find(key => object[key] === value);
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

	items.forEach(function (e) {
		if (input.includes(e)) {
			item = e
		}
	})

	if (item != undefined) {
		//~ actions = location[current_room]["items"][item]["usage"]
		actions = Object.keys(location[current_room]["items"][item]["usage"]["actions"])

		//~ if () {
		//~ }
		actions.forEach(function (e) {
			let action_words = location[current_room]["items"][item]["usage"]["actions"][e]
			//~ console.log(action_words + "action_words")
			action_words.forEach(function (f) {
				if (input.includes(f)) {
					//~ action = location[current_room]["items"][item]["usage"]["actions"][0]
					// var val = action_words.find(function (i) { return i.key == match })
					// console.log(val)


					action = f
					console.log(action + " action")




					//~ action = Object.keys(location[current_room]["items"][item]["usage"]["actions"][])
					//~ console.log(location[])
					//~ let test 

					//~ getKeyByValue(location[current_room]["items"][item]["usage"]["actions"], action)

					//~ console.log(location[current_room]["items"][item]["usage"]["actions"])
					//~ console.log(TEST)
				}

			})
		})

	}

	//~ if (item === undefined) {
	//~ console.log("\nSorry, I don't know how to do that")
	//~ valid_action = false
	//~ } else if (item != undefined && action === undefined) {
	//~ console.log("\nSorry, I don't know how to use " + item + " that way")
	//~ console.log("\nAvailable actions for " + item + " are \n" + location[current_room]["items"][item]["usage"])
	//~ valid_action = false
	//~ } else if (item != undefined && action != undefined){
	//~ valid_action = true
	//~ } else {
	//~ console.log("\nSorry, I don't know how to do that")
	//~ valid_action = false
	//~ }
}

function clear_variables() {
	item = undefined
	action = undefined
	actions = undefined
	valid_action = undefined
}

start()
