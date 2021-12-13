function getAverageSpeed(dataSet) {
    var speeds = []
    dataSet.forEach(item => {
        speeds.push(item.distance / item.time)
        console.log(`Speed ${speeds.length}`, item.distance / item.time)
    })
    return speeds.reduce((a, b) => a + b) / speeds.length
}
var dataSet = [{
    distance: 0.1,
    time: 4.5
},
{
    distance: 0.15,
    time: 4.3
},
{
    distance: 0.12,
    time: 4.6
},
{
    distance: 0.1,
    time: 4.6
},
{
    distance: 0.13,
    time: 4.3
}]
console.log(getAverageSpeed(dataSet));