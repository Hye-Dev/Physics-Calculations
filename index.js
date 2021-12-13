const startHeight = 1.59385;
const mass = 0.00045;
function kinetic(currentHeight) {
    var height = startHeight - currentHeight;
    if (height < 0) {
        console.log("Height is negative invoked.")
        height = currentHeight - startHeight;
    }
    var time = Math.sqrt(2 * height / 9.8)
    if (time <= 0) {
        return 0
    }
    var velocity = height / time;
    var kinetic = 0.5 * mass * Math.pow(velocity, 2)
    return kinetic;
}

function potential(currentHeight) {
    var potential = mass * 9.8 * currentHeight;
    return potential;
}

function mechanical(currentHeight) {
    var mechanical = kinetic(currentHeight) + potential(currentHeight);
    return mechanical;
}

function getAll(heights) {
    heights.forEach(height => {
        var kineticCalc = kinetic(height);
        var mechanicalCalc = mechanical(height);
        console.log(`Kinetic at ${height}: ${kineticCalc}`);
        console.log(`Mechanical at ${height}: ${mechanicalCalc}`);
        console.log("---------------------------------");
    })
}
getAll([1.59385, 1.03505, 0.8382, 0.7493, 0, 0.1])

function timeToFall(heightOfLaunch) {
    return Math.sqrt(2 * heightOfLaunch / 9.8)
}
function velocity(distance, time) {
    return distance / time;
}
function getNormalKinetic(velocity) {
    return 0.5 * mass * Math.pow(velocity, 2)
}
function getValues(height, distance) {
    var time = timeToFall(height);
    var theVelocity = velocity(distance, time);
    console.log(`Time to fall: ${time}`);
    console.log(`Velocity: ${theVelocity}`);
    console.log(`New Kinetic: ${kinetic(theVelocity)}`)
    console.log("---------------------------------");
}
getValues(0.1, 0.2);


function getDataSetValues(dataSet) {
    dataSet.forEach(item => {
        console.log(`Values at height of ${item.height} and distance of ${item.distance}:`);
        getValues(item.height, item.distance)
    })
}
var dataSet = [{
    height: 0.1,
    distance: 0.2
}]
getDataSetValues(dataSet)


function calculateAC(radius, distance) {
    var time = Math.sqrt(2 * distance / 9.8)
    var velocity = distance / time;
    return mass * Math.pow(velocity, 2) / radius;
}
console.log(`Ac1: ${calculateAC(5.08, 1.23)}`);
console.log(`Ac2: ${calculateAC(7.62, 0.64)}`);
