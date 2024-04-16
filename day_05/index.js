// Write a function to check if a character is uppercase or lowercase

function isUpperCase(char){
    return char === char.toUpperCase()
}

function isLowerCase(char){
    return char === char.toLowerCase()
}


console.log(isUpperCase("s"))
console.log(isLowerCase("b"))