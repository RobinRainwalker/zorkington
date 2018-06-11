//FUNCTIONS IN OBJECTS WITH STATE EXPERIMENTATION

//~ let state_object = {
	//~ "state_1": {
		//~ actionable: "action_1",
		//~ acted_on: [],
		//~ interactable: function() {
			//~ let acted = state_object["state_1"].acted_on
			//~ acted.push(state_object["state_1"].actionable)
			//~ }
	//~ }
//~ }

//~ function test() {
	//~ let acted = state_object["state_1"].acted_on
	//~ acted.push(state_object["state_1"].actionable)
//~ }
//~ test()

//~ state_object["state_1"].interactable();
//~ console.log(state_object["state_1"].acted_on[0] + " I think I did it?")


// CLASS EXPERIMENTATION & OBJECT GENERATION
class Room {
	constructor(actionable, acted_on, interactable) {
		this.actionable = actionable;
		this.acted_on = acted_on;
		this.interactable = interactable;
	}
}

Room.prototype.action = function() {
	console.log("you have " + this.acted_on)
}


//~ const newRoom = new Room("chaair", "sitted on tha thing", "ayup, u cans sit")

//~ console.log(newRoom)

//~ newRoom.action()

var o = new Object();
o.test = "testing"

let newestRoom = new Room(o, 282, "hurpadurp")
console.log(newestRoom)
newestRoom.actionable.test = "other"
console.log(newestRoom)

newestRoom.action()
