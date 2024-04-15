// Queston - Write a javascript to reverse a sting without using any built-in methods or libraries. the function shoult take a string as input and return the reversed string.

const reverseString = (str) =>{
    let reverseStr = "";

    for (let i = str.length -1; i >= 0; i--) {
    // console.log(str[i])      
    reverseStr = reverseStr + str[i]  
    }
    return reverseStr
}
console.log(reverseString("Hello"));

// How to Get Character of Specific Position using JavaScript ?

let newString = "Hello! my name is vinayak singh"
let index = 5
// let currentChar = newString.charAt(index)
// let currentChar = newString[1]
let currentChar = newString.slice(index, index + 1);

console.log(`Charactar at ${index}th position is '${currentChar}'`)