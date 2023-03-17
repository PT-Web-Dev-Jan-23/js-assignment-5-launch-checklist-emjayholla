// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
/*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === '') {
        return "Empty";
    } 

    if (isNaN(testInput)) {
        return "Not a Number";
    } 

    if (!isNaN(testInput)) {
        return "Is a Number";
    }  
}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log("function");
    let pilotStatus = document.getElementById("pilotStatus")
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" 
    || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" 
    || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!")
    } else if (fuelLevel < 10000 && cargoLevel < 10000) {
            list.style.visibility="visible"
            launchStatus.style.color = "red"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch`
            copilotStatus.innerHTML=`CoPilot ${copilot} is ready for launch`
            fuelStatus.innerHTML= "Fuel level too low for launch"
            cargoStatus.innerHTML= "Cargo mass low enough for launch"


    } else if (fuelLevel > 10000 && cargoLevel < 10000) {
            list.style.visibility="visible"
            launchStatus.style.color = "green"
            launchStatus.innerHTML = "Shuttle is Ready for Launch"
            pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch`
            copilotStatus.innerHTML=`CoPilot ${copilot} is ready for launch`
            fuelStatus.innerHTML= "Fuel level high enough for launch"
            cargoStatus.innerHTML= "Cargo mass low enough for launch"
    } else if (fuelLevel > 10000 && cargoLevel > 10000) {
            list.style.visibility="visible"
            launchStatus.style.color = "red"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch`
            copilotStatus.innerHTML=`CoPilot ${copilot} is ready for launch`
            fuelStatus.innerHTML= "Fuel level high enough for launch"
            cargoStatus.innerHTML= "Cargo mass too heavy for launch"
    } else {
            if (fuelLevel < 10000 && cargoLevel > 10000) {
            list.style.visibility="visible"
            launchStatus.style.color = "red"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch`
            copilotStatus.innerHTML=`CoPilot ${copilot} is ready for launch`
            fuelStatus.innerHTML= "Fuel level too low for launch"
            cargoStatus.innerHTML= "Cargo mass too heavy for launch"
    }
}
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
