
//~ class Room {
	//~ constructor(actionable, acted_on, interactable) {
		//~ this.actionable = actionable;
		//~ this.acted_on = acted_on;
		//~ this.interactable = interactable;
	//~ }
//~ }

//~ Room.prototype.action = function() {
	//~ console.log("you have " + this.acted_on)
//~ }


//~ const newRoom = new Room("chaair", "sitted on tha thing", "ayup, u cans sit")

//~ console.log(newRoom)

//~ newRoom.action()

//~ var o = new Object();
//~ o.test = "testing"

//~ let newestRoom = new Room(o, 282, "hurpadurp")
//~ console.log(newestRoom)
//~ newestRoom.actionable.test = "other"
//~ console.log(newestRoom)

//~ newestRoom.action()


class Room {
	constructor(name, objects, moveable_rooms){
	this.name = name;
	this.objects = objects;
	this.moveable_rooms = moveable_rooms
}
}

class Objects {
	constructor(name, description, room) {
	this.name = name;
	this.description = description;
	this.room = room;
}
}

Objects.prototype.used = false
Objects.prototype.use = function(){console.log(this.name + " has been used")}

let wooden_chair = new Objects("chair", "wooden, but with a comfy seat", "living room")

let living_room = new Room("living room", wooden_chair, "kitchen")

console.log(wooden_chair.used)
console.log(living_room)
console.log(wooden_chair)
living_room.objects.use()
