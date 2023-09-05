let greeting = "Hello, world!";
console.log(greeting.length);
let user = prompt("Enter some text:");
let maxLength = 150;
let inputLength = user.length;
let remainingCharacters = maxLength - inputLength;
if (remainingCharacters < 0) {
  alert(
    "You have exceeded the character limit by " +
      remainingCharacters +
      " characters. "
  );
} else {
  alert(
    "You have written " +
      inputLength +
      " characters. You only have " +
      remainingCharacters +
      " remaining characters."
  );
}
