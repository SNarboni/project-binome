var prompt = require('prompt');

var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [],
};

var grid = [
    [rover.direction, " ", " ", " ", " ", " ", " ", " ", " ", " "],
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



// fonction pour se tourner a gauche
function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "O";
        grid[rover.y][rover.x] = rover.direction;
    } else if (rover.direction === "O") {
        rover.direction = "S";
        grid[rover.y][rover.x] = rover.direction;
    } else if (rover.direction === "S") {
        rover.direction = "E";
        grid[rover.y][rover.x] = rover.direction;
    } else if (rover.direction === "E") {
        rover.direction = "N";
        grid[rover.y][rover.x] = rover.direction;
    }
    rover.travelLog.push(rover.direction)
    console.log(rover);
}

function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            grid[rover.y][rover.x] = rover.direction;
            break;
        case "E":
            rover.direction = "S";
            grid[rover.y][rover.x] = rover.direction;
            break;
        case "S":
            rover.direction = "O";
            grid[rover.y][rover.x] = rover.direction;
            break;
        case "O":
            rover.direction = "N";
            grid[rover.y][rover.x] = rover.direction;
            break;
    }
    console.log(rover);
}

function moveForward(rover) {
    var lastX = rover.x;
    var lastY = rover.y;

    if (rover.direction === "N") {
        rover.y -= 1;
        if (rover.y < 0 || rover.y > 9) {
            console.log("je peux pas");
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
        }
    } else if (rover.direction === "S") {
        rover.y += 1;
        if (rover.y < 0 || rover.y > 9) {
            console.log("je peux pas");
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
        }
    } else if (rover.direction === "E") {
        rover.x += 1;
        if (rover.x < 0 || rover.x > 9) {
            console.log("je peux pas");
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
        }
    } else if (rover.direction === "O") {
        rover.x -= 1;
        if (rover.x < 9 || rover.x > 9) {
            console.log("je peux pas");
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
        }
    }
    console.log(rover);
}

function moveBackward(rover) {
    var lastX = rover.x;
    var lastY = rover.y;

    if (rover.direction === "N") {
        rover.y += 1;
        if (rover.y < 0 || rover.y > 9) {
            console.log("je peux pas");
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
        }
    } else if (rover.direction === "S") {
        rover.y -= 1;
        if (rover.y < 0 || rover.y > 9) {
            console.log("je peux pas");
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
        }
    } else if (rover.direction === "E") {
        rover.x -= 1;
        if (rover.x < 0 || rover.x > 9) {
            console.log("je peux pas");
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
        }
    } else if (rover.direction === "O") {
        rover.x += 1;
        if (rover.x < 9 || rover.x > 9) {
            console.log("je peux pas");
        } else {
            grid[rover.y][rover.x] = grid[lastY][lastX];
            grid[lastY][lastX] = " ";
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
console.log(grid.join('\n'))