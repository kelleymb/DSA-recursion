// Write a function that reverses a string
// Takes a string as input, reverses the string, 
// and return the new string

const reverseString = function(string) {
    // Base case
    if (string.length === 1) {
        return string;
    }
    // General case
    // x - 1
    // string.prototype.substr() - returns characters in a string at a specified location
    // string.prototype.charAt() - returns the specified character from a string : like square brackets for an array
    return string.charAt(string.length - 1) + reverseString(string.substr(0, string.length - 1))
}

console.log(reverseString('hello'))


// Second solution

// function reverseString(str) {
//     if (str === "")
//       return "";
//     else
//       return reverseString(str.substr(1)) + str.charAt(0);
//   }

// console.log(reverseString("hello"));