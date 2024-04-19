// <!-- Return the counts object containing the counts of each element. -->

const numbers = [1, 2, 2, 3, 1, 4, 5, 4, 3, 15, 15]

let count = {}

    for (let element of numbers){
        count[element] = (count[element] || 0) + 1;
    }

console.log(count)