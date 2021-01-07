var prompt = require('prompt');

var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [],
};

// fonction pour se tourner a gauche
function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "O";
    } else if (rover.direction === "O") {
        rover.direction = "S";
    } else if (rover.direction === "S") {
        rover.direction = "E";
    } else if (rover.direction === "E") {
        rover.direction = "N";
    }
    rover.travelLog.push(rover.direction)
    console.log(rover);
}

function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "O";
            break;
        case "O":
            rover.direction = "N";
            break;
    }
    console.log(rover);
}

function moveForward(rover) {
    if (rover.direction === "N") {
        if (rover.y === 0) {
            console.log("je peux pas");
        } else {
            rover.y -= 1;
        }
    } else if (rover.direction === "S") {
        if (rover.y === 9) {
            console.log("je peux pas");
        } else {
            rover.y += 1;
        }
    } else if (rover.direction === "E") {
        if (rover.x === 9) {
            console.log("je peux pas");
        } else {
            rover.x += 1;
        }
    } else if (rover.direction === "O") {
        if (rover.x === 0) {
            console.log("je peux pas");
        } else {
            rover.x -= 1;
        }
    }
    console.log(rover);
}

function moveBackward(rover) {
    if (rover.direction === "N") {
        if (rover.y === 9) {
            console.log("je peux pas");
        } else {
            rover.y += 1;
        }
    } else if (rover.direction === "S") {
        if (rover.y === 0) {
            console.log("je peux pas");
        } else {
            rover.y -= 1;
        }
    } else if (rover.direction === "E") {
        if (rover.x === 0) {
            console.log("je peux pas");
        } else {
            rover.x -= 1;
        }
    } else if (rover.direction === "O") {
        if (rover.x === 9) {
            console.log("je peux pas");
        } else {
            rover.x += 1;
        }
    }
    console.log(rover);
}


function pilotRover(string) {
    prompt.start();
    var mouvement = [];
    mouvement = string.toUpperCase().split("");
    for (var i = 0; i < mouvement.length; i++) {
        if (mouvement[i] === "L") {
            turnLeft(rover);
        } else if (mouvement[i] === "R") {
            turnRight(rover);
        } else if (mouvement[i] === "F") {
            moveForward(rover);
            rover.travelLog.push(`[X:${rover.x}][Y:${rover.y}]`)

        } else if (mouvement[i] === "B") {
            moveBackward(rover);
            rover.travelLog.push(`[X:${rover.x}][Y:${rover.y}]`)
        } else {
            console.log("je ne conais pas cette direction, je marrète !");
        }
    }
    console.log(rover);

}

pilotRover(process.argv[2]);