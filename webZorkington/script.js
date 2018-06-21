var container = document.getElementById('container')
var input = document.getElementById('input')
var terminalOutput = document.getElementById('terminal')

let rooms = {
    '182 Main St': { 
        'description': '182 Main St.\nYou are standing on Main Street between Church and South Winooski\nThere is a door here. A keypad sits on the handle.\nOn the door is a handwritten sign.'},
    'move': 'u moved'
}

function introduction() {
    terminalOutput.innerHTML = rooms['182 Main St']['description']
}
introduction()

function move() {
    terminalOutput.innerHTML = rooms['move']
}

var test = document.getElementById('test')
test.addEventListener("onclick", move())


// listenForCommand();

// function listenForCommand() {
//     process.stdin.on('data', (chunk) => {
//         let input = chunk.toString();
//         processCommand(input);
//     });
// }

// function processCommand(input) {
//     input = input.trim();
//     if (input === 'open door') {
//         outputMessage('The door is locked.');
//     }
// }

// function outputMessage(message) {
//     console.log(message);
// }