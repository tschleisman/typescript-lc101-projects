// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


import {SpaceLocation} from "./SpaceLocation";

// Part 1: Declare (5) Variables With Type
const spacecraftName: string = 'Determination';
const speedMph: number = 17500;
const kilometersToMars: number = 225000000;
const kilometersToMoon: number = 384400
const milesPerKilometer: number = .621;

const milesToMars: number = kilometersToMars * milesPerKilometer;
const hoursToMars: number = milesToMars/speedMph;
const daysToMars: number = hoursToMars/24;


// Part 2: Print Days to Mars


console.log('${spacecraftName} will take ${daysToMars} days to get to mars.');




// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")

const getDays = (kilometersAway: number): number => {
    const milesAway: number = kilometersAway * milesPerKilometer;
    const hoursToLocation: number = milesAway / speedMph;
    return hoursToLocation / 24;
}

console.log(`${spacecraftName} will take ${getDaysToLocation(kilometersToMars)} days to get to mars.`);
console.log(`${spacecraftName} will take ${getDaysToLocation(kilometersToMoon)} days to get to mars.`);


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.




// Part 4: Create a Spacecraft Class

class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor(name: string, speedMph: number){
        this.
    }

    getDaysToLocation = (kilometersAway: number): number => {
        consts milesAway: number = kilometersAway * this.milesPerKilometer;
        const hoursToLocation: number = milesAway / this.speedMph;
        return hoursToLocation / 24;
    }   

    printDaysToLocation()

}

const McWiggles = new Spacecraft('McWiggles', 17500);

McWiggles.printDaysToLocation(new SpaceLocation ('Mars', kilometersToMars));
McWiggles.printDaysToLocation(new SpaceLocation ('Mars', kilometersToMoon));


console.log(`${McWiggles.name} would take ${McWiggles.getDaysToLocation(kilometersToMars)}`);
console.log(`${McWiggles.name} would take ${McWiggles.getDaysToLocation(kilometersToMoon)}`);

// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
