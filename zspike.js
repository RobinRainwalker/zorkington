let state_object = {
	"state_1": {
		can_transition_state_to: ["state_2"],
		actions_on_current_state: {
			action_1: "action_1"
		},
		acted_actions_on_current_state: [],
		interactable_within_current_state: {
			interaction_1: function() {
				let acted = state_object["state_1"].acted_actions_on_current_state 
				acted.push(state_object["state_1"].acted_actions_on_current_state.action_1)
				}
		}
	}
}


//~ function test_action() {
	//~ state_object["state_1"].interactable_within_current_state.interaction_1()	
//~ }
//~ test_action()

function test() {
console.log(state_object["state_1"].acted_actions_on_current_state + " acted")
}
state_object["state_1"].interactable_within_current_state.interaction_1()
//~ test()


//~ let state_object = {
	//~ "state_1": {
		//~ actionable: "action_1",
		//~ acted_on: [],
		//~ interactable: 
	//~ }
//~ }

//~ function test() {
	//~ let acted = state_object["state_1"].acted_on
	//~ acted.push(state_object["state_1"].actionable)
//~ }
//~ test()

//~ console.log(state_object["state_1"].acted_on[0])
