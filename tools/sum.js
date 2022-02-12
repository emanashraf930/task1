//totalsum of degrees

const sumFunction = () => {
    let sum = 0;

    let degree = [];
    for (let i = 0; i < degree.length; i++) {
        degree[i] = process.argv[1 + i]
    }
    // const command = process.argv[2]
    console.log(degree)
        // Here all the elements of the array is being printed.
    for (let i = 0; i < degree.length; i++) {
        sum += degree[i]
    }
    console.log(sum + 'hello');
}
module.exports = sumFunction