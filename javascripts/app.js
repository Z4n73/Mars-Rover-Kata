// Rover Object Goes Here

/*var grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];*/

var rover = {

  direction: "E",
  x: 0,
  y: 0,

  travelLog: [[0,0]],

  grid: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

};

// ======================

// ======================
function turnLeft(rover){

  console.log("turnLeft was called!");

    switch(rover.direction){

      case "N":

          console.log("The initial direction was: " + rover.direction);
          rover.direction = "W";
          console.log("The Mars Rover is now facing west!");
          break;

      case "W":

          console.log("The initial direction was: " + rover.direction);
          rover.direction = "S";
          console.log("The Mars Rover is now facing south!");
          break;

      case "S":

          console.log("The initial direction was: " + rover.direction);
          rover.direction = "E";
          console.log("The Mars Rover is now facing east!");
          break;

      case "E":

          console.log("The initial direction was: " + rover.direction);
          rover.direction = "N";
          console.log("The Mars Rover is now facing north!");
          break;

      default: 

          console.log("Sorry, the initial direction was not appropriate.");

    }
}

function turnRight(rover){

  console.log("turnRight was called!");

  switch(rover.direction){

    case "N":

        console.log("The initial direction was: " + rover.direction);
        rover.direction = "E";
        console.log("The Mars Rover is now facing east!");
        break;

    case "W":

        console.log("The initial direction was: " + rover.direction);
        rover.direction = "N";
        console.log("The Mars Rover is now facing north!");
        break;

    case "S":

        console.log("The initial direction was: " + rover.direction);
        rover.direction = "W";
        console.log("The Mars Rover is now facing west!");
        break;

    case "E":

        console.log("The initial direction was: " + rover.direction);
        rover.direction = "S";
        console.log("The Mars Rover is now facing south!");
        break;

    default: 

        console.log("Sorry, the initial direction was not appropriate.");

  }

}

function moveForward(rover){

  console.log("moveForward was called!")

  switch(rover.direction){

    case "N":

        rover.y -= 1;
        console.log("The Mars Rover moves up");
        break;

    case "W":

        rover.x -= 1;
        console.log("The Mars Rover moves left")
        break;

    case "S":

        rover.y += 1;
        console.log("The Mars Rover moves down")
        break;

    case "E":

        rover.x += 1;
        console.log("The Mars Rover moves right")
        break;

  }

}

function commandsList (commands){

  var command;

  for(let i = 0; i < commands.length; i++){

    command = commands.charAt(i);

    switch (command){

      case "f": 
        // if (rover.x > 10) {
          
        // }
        moveForward(rover);
        rover.travelLog.push(new Array(rover.x,rover.y));
        //console.log(rover.travelLog);
        console.log("\r\n");
        break;
      
      case "l":

        turnLeft(rover);
        console.log("\r\n");
        break;

      case "r":

        turnRight(rover);
        console.log("\r\n");
        break;
      
      default: 

        console.log("The character " + "'" + command 
                    + "'" + " is not valid.");
        console.log("\r\n");
        break;

    }

  }

  console.log("The travel log is as follows: "); //${rover.travelLog}`);
  
  for (let i = 0; i < rover.travelLog.length; i++) {
    
    console.log("Position " + (i+1) + " of the travel log: " +
                rover.travelLog[i]);
    
  }

}

//turnRight(rover);
//turnLeft(rover);

commandsList("ffffrfflffrfflfflf");

/*
Bonus | Enforce Boundaries

At some point you may have accidentally run our rover off of the 
grid. If you recall, our grid is 10x10.

Make sure your rover doesn’t accidentally roam off the map!



Bonus | Other Suggested Features

If you found the first few iterations of the exercise easy, try implementing the following features:

    Moving Backwards: Create another function called moveBackward that will move the rover back. This will be very similiar to the moveForward function.
    Validate Inputs: If we enter a letter into our inputs that isn’t a rover command, nothing happens. For example ffzzy would simply move forward twice. Add validation so that the inputs must be f, b, r, or l.

The following require you to actually create a grid for the rover to move around on. In code, these grids are often represented as two dimensional arrays.

    Obstacles - Create obstacles for the rover. If the rover’s next move would run it into an obstacle, stop it from moving forward and report the obstacle as found with console.log.
    Other Rovers - Add additional rovers to the map. Have them take turns moving. If one rover is going to run into the other, you should stop the rover and console.log a message saying so.

*/