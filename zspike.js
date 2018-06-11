let state_object = {
	"state_1": {
		actionable: "action_1",
		acted_on: [],
		interactable: function() {
			let acted = state_object["state_1"].acted_on
			acted.push(state_object["state_1"].actionable)
			}
	}
}

//~ function test() {
	//~ let acted = state_object["state_1"].acted_on
	//~ acted.push(state_object["state_1"].actionable)
//~ }
//~ test()

state_object["state_1"].interactable();
console.log(state_object["state_1"].acted_on[0] + " I think I did it?")
