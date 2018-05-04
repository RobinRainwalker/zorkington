let state_transitions = {
  "a": ["awesome"],
  "b": ["baller"],
  "c": ["cool af"]
}

let current_state = "a"

function enter_state(new_state) {
  valid_transitions = state_transitions[current_state];
  if (valid_transitions.includes(new_state)) {
    current_state = new_state;
  } else {
    console.log("ya hecked up trynna move from " + current_state + "to " + new_state);
  }

}

function change_state(input) {
  process.stdin.on('data', (a) =>
  {
    user_input = a.toString().trim();
    check_state_transition(user_input);
    enter_state(user_input);
  })
};

function check_state_transition(text) {
  if (text === Object.keys(state_transitions)) {
    console.log(state_transitions[current_state])
  }
}

console.log(current_state[0])

change_state()
