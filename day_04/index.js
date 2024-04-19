// write a javascript function to check if a given string starts with a specific substring.

function startsWith(str, substr) {
    // return str.indexOf(substr) === 0
    // return str.toLowerCase().startsWith(substr.toLowerCase())
    return str.slice(0, substr.length) === substr
}

console.log(startsWith("Hello World", "Hello"))
console.log(startsWith("Hello World", "world"))