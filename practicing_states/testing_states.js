let state_transitions = {
  "a": ["c_state"],
  "b": ["a_state"],
  "c": ["b_state"]
}

let current_state = "a"

function enter_state(new_state) {
  valid_transitions = state_transitions[current_state];
  if (valid_transitions.includes(new_state)) {
    current_state = new_state;
  } else {
    console.log("ya hecked up trynna move from " + current_state + " to " + new_state);
  }
}


function change_state(input) {
  process.stdin.on('data', (a) =>
  {
    let user_input = a.toString().trim();
    check_state_transition(user_input);
    enter_state(user_input);
  });

};



function check_state_transition(attempted_state_transition) {
  if (attempted_state_transition === "a") {
    console.log(state_transitions["a"])
  } else if (attempted_state_transition === "b") {
    console.log(state_transitions["b"])
  } else if (attempted_state_transition === "c") {
    console.log(state_transitions["c"])
  }
}

console.log(current_state[0])

change_state()
